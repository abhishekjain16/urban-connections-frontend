import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {NgForm} from '@angular/forms';
import {OrderServiceClient} from '../../../services/order.service.client';



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
  website: String;
  minimum_order_charge: Number;
  service_charge: Number;
  status: boolean;


  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private orderService: OrderServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'staff') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['id'];
        }
      );

    this.orderService.findOrdersByStaff()
      .subscribe(
        (order: any) => {
          this.order = order;
          this.name = this.order['name'];
          this.website = this.order['website'];
          this.minimum_order_charge = this.order['minimum_order_charge'];
          this.service_charge = this.order['service_charge'];
          this.status = this.order['status'];
        }
      );

  }

}
