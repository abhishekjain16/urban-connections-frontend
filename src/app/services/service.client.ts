import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable()

export class ServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) {
  }
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createService'   : this.createService,
    'findServiceById' : this.findServiceById,
    'updateService' : this.updateService,
    'deleteService' : this.deleteService,
    'findServices': this.findServices
  };

  createService(businessId: String, service: any, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/' + namespace + '/business/' + businessId + '/services';

    return this.http.post(url, {service: service}, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findServiceById(id: String, businessId: String, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/' + namespace + '/business/' + businessId + '/services/' + id;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateService(id: String, businessId: String, service: any, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/' + namespace + '/business/' + businessId + '/services/' + id;
    return this.http.put(url, service, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteService(id: String, businessId: String, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/' + namespace + '/business/' + businessId + '/services/' + id;
    return this.http.delete(url, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findServices(businessId: String, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/' + namespace + '/business/' + businessId + '/services/';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
}
