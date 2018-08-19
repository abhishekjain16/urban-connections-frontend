import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

// injecting service into module
@Injectable()

export class UserServiceClient {

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              @Inject(SESSION_STORAGE) private storage: StorageService) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'findUsersByRole': this.findUsersByRole,
    'currentUser': this.currentUser
  };

  createUser(user: any) {
    return this.http.post(this.baseUrl + '/api/users/', user)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/users/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findStaffsByBusinessId(businessId: string) {
    return this.http.get(this.baseUrl + '/api/business/' + businessId + '/staffs')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


  updateUser(user: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', 'Token token=' + this.storage.get('access_token'));

    const options = new RequestOptions({headers: headers});

    return this.http.put(this.baseUrl + '/api/users/', user, options)
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
    return this.http.get(this.baseUrl + '/api/user?role=' + role)
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
          this.storage.set('access_token', data['token']);
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
          if (user !== 0) {
            this.sharedService.user = user;
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  currentUser() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedin', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            return user;
          } else {
            return false;
          }
        }
      );
  }
}
