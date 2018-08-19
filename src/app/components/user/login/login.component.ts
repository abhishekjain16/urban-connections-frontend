import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid Username/Password !';
  role: string;
  loading = false;

  constructor(private router: Router,
              private userService: UserServiceClient,
              private sharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.userService.login(this.username, this.password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.role = this.sharedService.user['role'];
          this.loading = false;
          if (this.role === 'Owner') {
            this.router.navigate(['owner/business/']);
          } else if (this.role === 'Staff') {
            this.router.navigate(['staff/business']);
          } else if (this.role === 'Admin') {
            this.router.navigate(['admin/user']);
          } else {
            this.router.navigate(['/']);
          }
        },
        (error: any) => {
          this.loading = false;
          this.errorFlag = true;
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }
}
