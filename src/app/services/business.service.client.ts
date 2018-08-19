import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable()

export class BusinessServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) {
  }
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createBusiness'   : this.createBusiness,
    'findBusinessById' : this.findBusinessById,
    'updateBusiness' : this.updateBusiness,
    'deleteBusiness' : this.deleteBusiness,
    'findBusinesses': this.findBusinesses
  };

  createBusiness(business: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.post(this.baseUrl + '/api/admin/business/', {business: business}, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBusinessById(id: String, namespace: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = environment.baseUrl + '/api/' + namespace + '/business/' + id;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateBusiness(id: String, business: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    return this.http.put(this.baseUrl + '/api/admin/business/' + id, business, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteBusiness(id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.delete(this.baseUrl + '/api/admin/business/' + id, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findBusinesses() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = environment.baseUrl + '/api/admin/business';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  findBusinessesByOwner() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = environment.baseUrl + '/api/owner/business';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  searchBusiness(term: String, location: String) {
    const url = environment.baseUrl + '/api/business?term=' + term + '&location=' + location;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  SearchBusinessById(id: String) {
    const url = environment.baseUrl + '/api/business/' + id;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
}
