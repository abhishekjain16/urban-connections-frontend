import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {UserServiceClient} from '../../../services/user.service.client';

@Component({
  selector: 'app-owner-staff-list',
  templateUrl: './owner-staff-list.component.html',
  styleUrls: ['./owner-staff-list.component.css']
})
export class OwnerStaffListComponent implements OnInit {
  users = [];
  businessId: string;
  user = {};

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
        }
      );
    this.userService.findStaffsByBusinessId(this.businessId)
      .subscribe(
        (users: any) => {
          this.users = users;
        }
      );
  }
}
