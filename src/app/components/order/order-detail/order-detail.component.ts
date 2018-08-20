import { Component, OnInit } from '@angular/core';
import {OrderServiceClient} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {ServiceClient} from '../../../services/service.client';
import {OrderItemServiceClient} from '../../../services/orderItem.service.client';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  businessId: string;
  order: {};
  orderId: string;
  status: string;
  total: Number;
  subTotal: Number;
  user = {};
  items = [];
  services = [];
  tax: Number;
  visitCharges: Number;
  name: string;
  image: any;
  business = {};
  address = {};
  loading = false;
  internalBusiness = {};
  yelpId: string;

  constructor(private orderService: OrderServiceClient,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private businessService: BusinessServiceClient,
              private sharedService: SharedService,
              private userService: UserServiceClient,
              private serviceClient: ServiceClient,
              private orderItemService: OrderItemServiceClient) { }

  ngOnInit() {
    this.loading = true;
    this.user = this.sharedService.user;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
          this.orderId = params['id'];
          this.loadBusiness();
          this.loadOrders();
          this.loading = false;
        });
    this.loadOrderItems();

    this.serviceClient.findServices(this.businessId, '')
      .subscribe( (services) => {
        this.services = services;
      });
  }

  loadBusiness() {
    this.businessService.findInternalBusinessById(this.businessId)
      .subscribe( (business) => {
        this.name = business['name'];
      });
  }

  loadOrders() {
    this.orderService.findOrderByBusinessIdForCustomer(this.businessId, null)
      .subscribe(
        (order: any) => {
          this.order = order;
          this.total = order['total'];
          this.subTotal = order['sub_total'];
          this.status = order['status'];
          this.visitCharges = order['visitCharges'];
          this.tax = order['tax'];
        });
  }

  loadOrderItems() {
    this.orderItemService.findOrderItemsByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }
  updateOrder(price) {
    const order = {
      sub_total: this.subTotal + price,
      total: this.total + price
    };
    this.orderService.updateOrder(this.orderId, this.businessId, order)
      .subscribe( (orderItem) => {
        this.loadOrders();
        this.loading = false;
      });
  }

  add(sItem: any) {
    this.loading = true;
    const item = {
      quantity: 1,
      name: sItem.name,
      price: sItem.price,
      order_id: this.orderId
    };
    this.orderItemService.createOrderItem(this.orderId, item)
      .subscribe( (orderItem) => {
        this.updateOrder(item.price);
        this.loadOrderItems();
      });
  }

  addQuantity(oItem: any) {
    this.loading = true;
    const addedPrice = oItem.price / oItem.quantity;
    const item = {
      quantity: oItem.quantity + 1,
      price: oItem.price + addedPrice
    };
    this.orderItemService.updateOrderItem(this.orderId, oItem.id, item)
      .subscribe( (status) => {
        this.updateOrder(addedPrice);
        this.loadOrderItems();
      });
  }

  reduceQuantity(oItem: any) {
    this.loading = true;
    const reducedPrice = oItem.price / oItem.quantity;
    const item = {
      quantity: oItem.quantity - 1,
      price: oItem.price - reducedPrice
    };
    if (item.price <= 0) {
      this.deleteItem(oItem);
    } else {
      this.orderItemService.updateOrderItem(this.orderId, oItem.id, item)
        .subscribe( (status) => {
          this.updateOrder(-reducedPrice);
          this.loadOrderItems();
        });
    }
  }

  deleteItem(oItem: any) {
    this.loading = true;
    // const reducedPrice = oItem.price / oItem.quantity;
    this.orderItemService.deleteOrderItem(this.orderId, oItem.id)
      .subscribe( (status) => {
        this.updateOrder(-oItem.price);
        this.loadOrderItems();
      });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

}
