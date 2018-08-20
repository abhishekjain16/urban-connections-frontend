import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderServiceClient} from '../../../services/order.service.client';
import {SharedService} from '../../../services/shared.service';
import {UserServiceClient} from '../../../services/user.service.client';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  businessId: string;
  orders = [];
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
              private orderService: OrderServiceClient,
              private sharedService: SharedService,
              private userService: UserServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.orderService.findAllCustomerOrders()
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }

}
