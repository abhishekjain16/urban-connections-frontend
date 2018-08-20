import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {OrderServiceClient} from '../../../services/order.service.client';
import {OrderItemServiceClient} from '../../../services/orderItem.service.client';


@Component({
  selector: 'app-staff-order-detail',
  templateUrl: './staff-order-detail.component.html',
  styleUrls: ['./staff-order-detail.component.css']
})
export class StaffOrderDetailComponent implements OnInit {
  order = {};
  user = {};
  owner = {};
  businessId: String;
  name: String;
  status: boolean;
  orderId: string;
  items = [];


  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private orderService: OrderServiceClient,
              private orderItemService: OrderItemServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Staff') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.orderId = params['orderId'];
          this.orderService.findOrderByStaffAndId(this.orderId)
            .subscribe(
              (order: any) => {
                this.order = order;
                this.status = this.order['status'];
              }
            );

        });
    this.loadOrderItems();
  }
  loadOrderItems() {
    this.orderItemService.findOrderItemsByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }

  cancelOrder() {
    this.order['status'] = 'rejected';
    this.orderService.updateOrderByStaff(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          this.router.navigate(['/staff', 'order']);
        }
      );
  }

  completeOrder() {
    this.order['status'] = 'completed';
    this.orderService.updateOrderByStaff(this.orderId, this.order)
      .subscribe(
        (order: any) => {
          this.router.navigate(['/staff', 'order']);
        }
      );
  }

}
