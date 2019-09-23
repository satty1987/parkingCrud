
import { Injectable } from '@angular/core';
import { API_URLS } from '../constants/api-urls';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    public notify = new Subject<any>();

    public responseCache = new Map();
    public cacheUser = new Map();
    public apiUrl = environment.apiUrl;

    constructor(
        private http: HttpClient) {
            if (sessionStorage.getItem('userInfo') !== null) {
                const cache = JSON.parse(sessionStorage.getItem('userInfo'));
                this.cacheUser.set('userInfo', cache);
            }
    }
    getHttpRequest(path) {
        const url = this.apiUrl + path;
        return this.http.get(url);
    }
    postHttpRequest(path, body) {
        const url = this.apiUrl + path;
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache',
                    'accept': 'application/json'
                }
            )
        };
        return this.http.post(url, body, httpOptions);
    }

    putHttpRequest(path, body) {
        const url = this.apiUrl + path;
        return this.http.put(url, body);
    }

    deleteHttpRequest(path) {
        const url = this.apiUrl + path;
        return this.http.delete(url);
    }
}

