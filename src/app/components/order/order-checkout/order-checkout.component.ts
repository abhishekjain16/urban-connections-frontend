import { Component, OnInit, ViewChild } from '@angular/core';
import {OrderServiceClient} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {OrderItemServiceClient} from '../../../services/orderItem.service.client';
import {NgForm} from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {
  @ViewChild('f') addressForm: NgForm;
  businessId: string;
  order: {};
  orderId: string;
  rstate: string;
  total: Number;
  subTotal: Number;
  items = [];
  tax: Number;
  visitCharges: Number;
  user: String;
  restaurant = {};
  address: {};
  street: string;
  street2: string;
  name: string;
  phone: string;
  city: string;
  state: string;
  zipCode: string;

  constructor(private orderService: OrderServiceClient,
              private router: Router,
              private userService: UserServiceClient,
              private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private businessService: BusinessServiceClient,
              private orderItemService: OrderItemServiceClient) { }


  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
          this.orderId = params['id'];
        });
    this.loadOrder();
    this.businessService.findInternalBusinessById(this.businessId)
      .subscribe( (business) => {
        this.name = business['name'];
      });

    this.loadOrderItems();
  }

  loadOrder() {
    this.orderService.findOrderByBusinessIdForCustomer(this.businessId, null)
      .subscribe(
        (order: any) => {
          this.order = order;
          this.subTotal = order['sub_total'];
          this.total = order['total'];
          if (this.subTotal <= 0) {
            this.router.navigate(['business', this.businessId, 'order', this.orderId]);
          } else {
            this.rstate = order['status'];
            this.visitCharges = order['visitCharges'];
            this.tax = order['tax'];
            this.address = order['address'];
            if (this.address) {
              this.street = this.address['street'];
              this.street2 = this.address['street2'];
              this.city = this.address['city'];
              this.state = this.address['state'];
              this.zipCode = this.address['zipCode'];
            }
          }
        });
  }

  loadOrderItems() {
    this.orderItemService.findOrderItemsByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }
  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
  update() {
    const order = {
      order: {
        address_attributes: {
          street: this.addressForm.value.street,
          city: this.addressForm.value.city,
          zipcode: this.addressForm.value.zipCode,
          state: this.addressForm.value.state,
          street2: this.addressForm.value.street2,
          customer_id: this.user['id']
        },
        status: 'paid'
      }
    }
    this.orderService.updateOrder(this.orderId, this.businessId, order)
      .subscribe(
        (status: any) => {
          this.router.navigate(['business', this.businessId, 'order', this.orderId, 'complete']);
        }
      );
  }


}
