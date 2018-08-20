import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {NgForm} from '@angular/forms';
import {UserServiceClient} from '../../../services/user.service.client';

@Component({
  selector: 'app-owner-staff-detail',
  templateUrl: './owner-staff-detail.component.html',
  styleUrls: ['./owner-staff-detail.component.css']
})
export class OwnerStaffDetailComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  user = {};
  businessId: string;
  staff = {};
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  status: boolean;
  password: string;
  staffId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Owner') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
          this.staffId = params['id'];
        }
      );
    this.userService.findStaffByBusinessId(this.businessId, this.staffId)
      .subscribe(
        (staff: any) => {
          this.staff = staff;
          this.first_name = this.staff['first_name'];
          this.last_name = this.staff['last_name'];
          this.username = this.staff['username'];
          this.email = this.staff['email'];
          this.phone = this.staff['phone'];
          this.status = this.staff['status'];
        }
      );

  }

  update() {
    this.staff['first_name'] = this.profileForm.value.first_name;
    this.staff['last_name'] = this.profileForm.value.last_name;
    this.staff['username'] = this.profileForm.value.username;
    this.staff['email'] = this.profileForm.value.email;
    this.staff['phone'] = this.profileForm.value.phone;
    this.staff['status'] = this.profileForm.value.status;
    this.userService.updateStaff(this.businessId, this.staffId, this.staff)
      .subscribe(
        (staff: any) => {
          this.staff = staff;
          this.router.navigate(['owner/business', this.businessId, 'staff']);
        },
        (error: any) => {
        }
      );
  }

}
