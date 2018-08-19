import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceClient } from '../../../services/user.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-admin-user-detail',
  templateUrl: './admin-user-detail.component.html',
  styleUrls: ['./admin-user-detail.component.css']
})
export class AdminUserDetailComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  userId: string;
  user = {};
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  active: boolean;
  loggedinUser = {};

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.loggedinUser = this.sharedService.user;
    if (this.loggedinUser['type'] !== 'Admin') {
      this.router.navigate(['/']);
    }
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['id'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe(
        (user: any) => {
          this.user = user;
          this.userId = user['id'];
          this.username = user['username'];
          this.email = user['email'];
          this.first_name = user['first_name'];
          this.last_name = user['last_name'];
          this.active = user['status'];
        }
      );

  }

  update() {
    this.user['username'] = this.profileForm.value.username;
    this.user['email'] = this.profileForm.value.email;
    this.user['first_name'] = this.profileForm.value.first_name;
    this.user['last_name'] = this.profileForm.value.last_name;
    this.user['status'] = this.profileForm.value.active;
    this.userService.updateUser(this.user['id'], this.user)
      .subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
        }
      );
  }
}
