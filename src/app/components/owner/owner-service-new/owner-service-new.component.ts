import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {ServiceClient} from '../../../services/service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-owner-service-new',
  templateUrl: './owner-service-new.component.html',
  styleUrls: ['./owner-service-new.component.css']
})
export class OwnerServiceNewComponent implements OnInit {

  @ViewChild('f') profileForm: NgForm;
  user = {};
  service = {};
  businessId: String;
  name: String;
  serviceId: String;
  duration: String;
  price: Number;
  description: String;


  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private serviceClient: ServiceClient) { }

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
  }

  create() {
    this.service['name'] = this.profileForm.value.name;
    this.service['price'] = this.profileForm.value.price;
    this.service['duration'] = this.profileForm.value.duration;
    this.service['description'] = this.profileForm.value.description;
    this.serviceClient.createService(this.businessId, this.service, 'owner')
      .subscribe(
        (service: any) => {
          this.service = service;
          this.router.navigate(['owner/business', this.businessId, 'service']);
        },
        (error: any) => {
        }
      );
  }
}
