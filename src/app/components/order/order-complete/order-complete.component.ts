import { Component, OnInit } from '@angular/core';
import {OrderServiceClient} from '../../../services/order.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {OrderItemServiceClient} from '../../../services/orderItem.service.client';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {
  businessId: string;
  order: {};
  orderId: string;
  status: string;
  total: Number;
  subTotal: Number;
  items = [];
  tax: Number;
  visitCharges: Number;
  name: string;
  user: String;
  business = {};
  address: {};
  street: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  yelpId: string;

  constructor(private orderService: OrderServiceClient,
              private router: Router,
              private userService: UserServiceClient,
              private sharedService: SharedService,
              private activatedRoute: ActivatedRoute,
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
        this.yelpId = business['yelp_id'];
      });

    this.loadOrderItems();
  }

  loadOrder() {
    this.orderService.findOrderByBusinessIdForCustomer(this.businessId, null)
      .subscribe(
        (order: any) => {
          this.order = order;
          if (this.order === 'cart') {
            this.router.navigate(['business', this.businessId, 'order', this.orderId]);
          } else {
            this.total = order['total'];
            this.subTotal = order['sub_total'];
            this.status = order['status'];
            this.visitCharges = order['visitCharges'];
            this.tax = order['tax'];
            this.address = order['address'];
            if (this.address) {
              this.street = this.address['street'];
              this.street2 = this.address['street2'];
              this.city = this.address['city'];
              this.state = this.address['state'];
              this.zipCode = this.address['zipcode'];
            }
          }
        });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  loadOrderItems() {
    this.orderItemService.findOrderItemsByOrder(this.orderId)
      .subscribe( (items) => {
        this.items = items;
      });
  }

  stateText() {
    if (this.status === 'paid') {
      return 'Thanks for Completeing the Order!';
    } else if (this.status === 'complete') {
      return 'Your Order has been Completed.';
    } else if (this.status === 'cancelled') {
      return 'Your order has been cancelled';
    }
  }
}
