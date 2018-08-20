import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable()

export class OrderItemServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) {
  }
  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createOrderItem'   : this.createOrderItem,
    'updateOrderItem' : this.updateOrderItem,
    'deleteOrderItem' : this.deleteOrderItem,
    'findOrderItemsByOrder': this.findOrderItemsByOrder,
  };

  createOrderItem(orderId: String, orderItem: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/orders/' + orderId + '/order_items';

    return this.http.post(url, {order_item: orderItem}, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateOrderItem(orderId: String, id: String, orderItem: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    const url = this.baseUrl + '/api/orders/' + orderId + '/order_items/' + id;
    return this.http.put(url, orderItem, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteOrderItem(orderId: String, id: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/orders/' + orderId + '/order_items/' + id;
    return this.http.delete(url, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findOrderItemsByOrder(orderId: String) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    const url = this.baseUrl + '/api/orders/' + orderId + '/order_items/';
    return this.http.get(url, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
}
