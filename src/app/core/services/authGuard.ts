import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class AccountResolver implements CanActivate {


    constructor(
        private route: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!_.isNull(sessionStorage.getItem('userInfo'))) {
            return true;
        } else {
            this.route.navigate(['/login']);
        }
    }
}


