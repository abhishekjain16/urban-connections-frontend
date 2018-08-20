import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {BusinessServiceClient} from '../../../services/business.service.client';

@Component({
  selector: 'app-owner-registration',
  templateUrl: './owner-registration.component.html',
  styleUrls: ['./owner-registration.component.css']
})
export class OwnerRegistrationComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  username: string;
  password: string;
  verifyPassword: string;
  lastName: string;
  firstName: string;
  email: string;
  errorFlag: boolean;
  errorMsg = '';
  businessId: string;
  businessName: string;
  business = {};

  constructor(private router: Router,
              private userService: UserServiceClient,
              private activatedRoute: ActivatedRoute,
              private businessService: BusinessServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
          this.businessService.SearchBusinessById(this.businessId)
            .subscribe(
              (business: any) => {
                this.businessName = business['name'];
              }
            );
        }
      );
  }

  createBusiness(ownerId) {
    this.business = {
      name: this.businessName,
      yelp_id: this.businessId,
      owner_id: ownerId
    }
    this.businessService.createBusiness(this.business)
      .subscribe(
        (business: any) => {
          this.router.navigate(['profile']);},
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    this.lastName = this.registerForm.value.lastName;
    this.firstName = this.registerForm.value.firstName;
    this.email = this.registerForm.value.email;
    const user  = {
      username: this.username,
      password: this.password,
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      type: 'Owner'
    };

    this.userService.createUser(user)
      .subscribe(
        (newUser: any) => {
          this.createBusiness(newUser['id']);
        }
      );
  }
}
