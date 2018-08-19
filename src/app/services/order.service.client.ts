import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable()

export class OrderServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) {
  }
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'findOrder': this.findOrder,
    'findOrdersByStaff': this.findOrdersByStaff
  };


  findOrder() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = environment.baseUrl + '/api/admin/order';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  findOrdersByStaff() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = environment.baseUrl + '/api/staff/order';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }


}
