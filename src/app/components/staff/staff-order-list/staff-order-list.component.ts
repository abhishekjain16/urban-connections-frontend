import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {OrderServiceClient} from '../../../services/order.service.client';

@Component({
  selector: 'app-staff-order-list',
  templateUrl: './staff-order-list.component.html',
  styleUrls: ['./staff-order-list.component.css']
})
export class StaffOrderListComponent implements OnInit {
  orders = [];
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private orderService: OrderServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Staff') {
      this.router.navigate(['/']);
    }

    this.orderService.findOrderByStaff()
      .subscribe(
        (orders: any) => {
          this.orders = orders;
        }
      );
  }

}
