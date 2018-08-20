import { Component, OnInit } from '@angular/core';
import {BusinessServiceClient} from '../../services/business.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';
import {SharedService} from '../../services/shared.service';
import {OrderServiceClient} from '../../services/order.service.client';
import {NULL_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-business.detail',
  templateUrl: './business.detail.component.html',
  styleUrls: ['./business.detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  businessId: string;
  name: string;
  image: any;
  ratings: any;
  number: string;
  images = [];
  business = {};
  internalBusiness = {};
  owner = {};
  hours = [];
  days = [];
  reviews = [];
  order = {};
  positions = [];
  center: string;
  user: any;
  services = {};
  city: string;
  shouldShow: boolean;
  loading = false;
  tax = 5.0;

  constructor( private businessService: BusinessServiceClient,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private userService: UserServiceClient,
               private sharedService: SharedService,
               private orderService: OrderServiceClient) { }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
        });

    this.userService.currentUser()
      .subscribe( (user) => {
        this.user = user;
        this.businessService.findBusinessByYelpId(this.businessId)
          .subscribe(
            (internalBusiness: any) => {
              if (internalBusiness) {
                this.internalBusiness = internalBusiness;
                this.orderService.findOrderByBusinessIdForCustomer(this.internalBusiness['id'], 'cart')
                  .subscribe(
                    (order: any) => {
                      if (order) {
                        this.order = order;
                      }
                      this.canOrder();
                    }
                  );
              }
            });
      });

    this.businessService.SearchBusinessById(this.businessId)
      .subscribe( (result) => {
        const coordinates = result['coordinates'];
        this.name = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.number = result.phone;
        this.images = result.photos;
        this.business = result;
        this.positions = [[coordinates['latitude'], coordinates['longitude']]];
        this.center = coordinates['latitude'].toString() + ', ' + coordinates['longitude'].toString();
        if (result.hours) {
          this.hours = result.hours[0]['open'];
        }
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.city = result.location['city'];
        this.loading = false;
      });

    this.businessService.findReviewsByBusinessId(this.businessId)
      .subscribe( (result) => {
        this.reviews = result.reviews;
      });
  }

  categories(cats) {
    if (cats) {
      return cats.map(a => a.title).join(', ');
    } else {
      return '';
    }
  }

  createOrder() {
    this.order = {
      customer_id: this.user['id'],
      visitCharges: this.internalBusiness['service_charge'],
      total: this.internalBusiness['service_charge'] + this.tax,
      tax: this.tax,
      status: 'cart'

    };
    this.orderService.createOrder(this.internalBusiness['id'], this.order)
      .subscribe(
        (order: any) => {
          this.router.navigate(['business', this.internalBusiness['id'], 'order', order['id']]);
        });
  }

  canOrder() {
    if (this.internalBusiness) {
      this.shouldShow = true;
    } else {
      this.shouldShow = false;
    }
  }

}
