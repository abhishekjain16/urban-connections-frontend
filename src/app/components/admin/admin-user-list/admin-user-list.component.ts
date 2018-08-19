import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../../services/user.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  role: string;
  users = [];
  path: string;
  user: any;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserServiceClient,
              private sharedService: SharedService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Admin') {
      this.router.navigate(['/']);
    }

    this.userService.findUsersByRole('Customer')
      .subscribe(
        (users: any) => {
          this.users = users;
        }
      );
  }

}
