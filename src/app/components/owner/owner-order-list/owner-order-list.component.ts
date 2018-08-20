import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {OrderServiceClient} from '../../../services/order.service.client';

@Component({
  selector: 'app-owner-order-list',
  templateUrl: './owner-order-list.component.html',
  styleUrls: ['./owner-order-list.component.css']
})
export class OwnerOrderListComponent implements OnInit {
  orders = [];
  user = {};
  businessId: String;

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private orderService: OrderServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Owner') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
        }
      );
    this.orderService.findOrderByBusinessId(this.businessId)
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }

}
