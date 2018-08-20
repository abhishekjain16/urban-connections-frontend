import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BusinessServiceClient} from '../../../services/business.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-business-detail',
  templateUrl: './admin-business-detail.component.html',
  styleUrls: ['./admin-business-detail.component.css']
})
export class AdminBusinessDetailComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;

  business = {};
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
              private businessService: BusinessServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Admin') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['id'];
        }
      );
    this.businessService.findBusinessById(this.businessId, 'admin')
      .subscribe(
        (business: any) => {
          this.business = business;
          this.name = this.business['name'];
          this.website = this.business['website'];
          this.minimum_order_charge = this.business['minimum_order_charge'];
          this.service_charge = this.business['service_charge'];
          this.status = this.business['status'];
        }
      );
  }

  update() {
    this.business['name'] = this.profileForm.value.name;
    this.business['website'] = this.profileForm.value.website;
    this.business['minimum_order_charge'] = this.profileForm.value.minimum_order_charge;
    this.business['service_charge'] = this.profileForm.value.service_charge;
    this.business['status'] = this.profileForm.value.status;
    this.businessService.updateBusiness(this.business['id'], this.business, 'admin')
      .subscribe(
        (business: any) => {
          this.business = business;
        },
        (error: any) => {
        }
      );

  }

}
