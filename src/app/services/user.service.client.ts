import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

// injecting service into module
@Injectable()

export class UserServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: WebStorageService) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUsersByRole': this.findUsersByRole,
    'createStaff': this.createStaff,
    'findOwnerByBusinessId': this.findOwnerByBusinessId,
    'currentUser': this.currentUser
  };

  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/users/', {user: user})
      .map(
        (res: Response) => {
          const data = res.json();
          this.storage.set('access_token', data['access_token']);
          return data;
        }
      );
  }

  createStaff(businessId: String, staff: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.post(this.baseUrl + '/api/owner/business/' + businessId + '/staffs', {staff: staff}, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.get(this.baseUrl + '/api/users/' + userId, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStaffsByBusinessId(businessId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.get(this.baseUrl + '/api/owner/business/' + businessId + '/staffs', this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStaffByBusinessId(businessId: string, staffId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.get(this.baseUrl + '/api/owner/business/' + businessId + '/staffs/' + staffId, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findOwnerByBusinessId(businessId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.get(this.baseUrl + '/api/business/' + businessId + '/owner/', this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );

  }


  updateUser(id: String, user: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    return this.http.put(this.baseUrl + '/api/users/' + id, user, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateStaff(businessId: String, staffId: String, staff: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;
    return this.http.put(this.baseUrl + '/api/owner/business/' + businessId + '/staffs/' + staffId, staff, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/users/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUsersByRole(role: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.get(this.baseUrl + '/api/admin/users?role=' + role, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  login(username: string, password: string) {

    this.options.withCredentials = true;

    const body = {
      username : username,
      password : password
    };
    return this.http.post(this.baseUrl + '/api/sign_in', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          this.storage.set('access_token', data['access_token']);
          return data;
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.delete(this.baseUrl + '/api/sign_out', this.options)
      .map(
        (res: Response) => {
          this.storage.set('access_token', null);
          const data = res;
        }
      );
  }

  loggedIn() {
    this.options.withCredentials = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.post(this.baseUrl + '/api/users/logged_in', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user['error']) {
            this.router.navigate(['/login']);
            return false;
          } else {
            this.sharedService.user = user;
            return true;
          }
        }
      );
  }

  currentUser() {
    this.options.withCredentials = true;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + this.storage.get('access_token'));
    this.options.headers = headers;

    return this.http.post(this.baseUrl + '/api/users/logged_in', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user['error']) {
            return false;
          } else {
            return user;
          }
        }
      );
  }

}
