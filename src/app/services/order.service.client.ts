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
    'createOrder'   : this.createOrder,
    'findOrderByBusinessIdAndOrderId' : this.findOrderByBusinessIdAndOrderId,
    'updateOrder' : this.updateOrder,
    'rejectOrder' : this.rejectOrder,
    'findOrderByBusinessId': this.findOrderByBusinessId,
    'findOrdersForUser': this.findOrdersForUser,
    'findOrderByBusinessIdForCustomer': this.findOrderByBusinessIdForCustomer,
    'findOrderByStaff': this.findOrderByStaff,
    'findAllCustomerOrders': this.findAllCustomerOrders
  };

  createOrder(businessId: String, order: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/business/' + businessId + '/orders';

    return this.http.post(url, {order: order}, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findOrderByBusinessIdAndOrderId(id: String, businessId: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/business/' + businessId + '/orders/' + id;
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateOrder(id: String, businessId: String, order: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/business/' + businessId + '/orders/' + id;
    return this.http.put(url, order, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  rejectOrder(id: String, businessId: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/business/' + businessId + '/order/' + id;
    return this.http.delete(url, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findOrderByStaff() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/staff/orders';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  findOrderByBusinessId(businessId: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/business/' + businessId + '/orders/';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  findOrdersForUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/orders/';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  findOrderByBusinessIdForCustomer(businessId: string, state: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    let url = this.baseUrl + '/api/business/' + businessId + '/orders/last?';
    if (state) {
      url = url + 'state=' + state;
    }
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });

  }
  findAllCustomerOrders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/orders/all';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });

  }
}
