
import { Injectable } from '@angular/core';
import { OKTA_CONFIG } from '../../okta.config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OktaAuthService {


  constructor(
    private http: HttpClient,
    private router: ActivatedRoute) {
  }

  loginWithOkta() {
    const queryString = Object.keys(OKTA_CONFIG.queryParams).map(key => key + '=' + OKTA_CONFIG.queryParams[key]).join('&');

    window.location.href = `${OKTA_CONFIG.issuer}?${queryString}`;

  }


  getOktaReturnCode() {
    return this.router.queryParams;
  }

  getOktaToken(code) {
    const grant_type = 'authorization_code';
    const redirect = 'http://localhost:4200/implicit/callback';
    const body = `grant_type=${grant_type}&code=${code}&redirect_uri=${redirect}`;
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'cache-control': 'no-cache',
          'authorization': 'Basic MG9hamRsZ250NWZmOTh0WFowaDc6RTFuT0VhS05BU1pUMEYwZHpYR0p0QWwtN1FhcXFIaVFvQjBUakpUTQ==',
          'accept': 'application/json'
        }
      )
    };
    return this.http.post(OKTA_CONFIG.tokenUrl, body, httpOptions);
  }

  getOktaUserProfile(): any {

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'cache-control': 'no-cache',
          'Authorization': 'Bearer ' + sessionStorage.getItem('oktaAccessToken')
        }
      )
    };
    return this.http.post(OKTA_CONFIG.userInfo, null, httpOptions);
  }

  // getTmoAccess() {
  //   const grant_type = 'client_credentials';
  //   const redirect = 'http://localhost:4200/implicit/callback';
  //   const body = `grant_type=${grant_type}&client_id=hV6lfg3EBAiVX5EZjbpexLoLhGhuGiWR`;
  //   const httpOptions = {
  //     headers: new HttpHeaders(
  //       {
  //        'accept': 'application/json, text/plain, */*',
  //        'Content-Type': 'application/x-www-form-urlencoded',
  //         'cache-control': 'no-cache',
  //       }
  //     )
  //   };
  //   //return this.http.post('/oauth/v1/access', body, httpOptions);
  // }
}

