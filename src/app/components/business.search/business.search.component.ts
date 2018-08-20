import { Component, OnInit } from '@angular/core';
import { BusinessServiceClient } from '../../services/business.service.client';
import { UserServiceClient } from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-business.search',
  templateUrl: './business.search.component.html',
  styleUrls: ['./business.search.component.css']
})
export class BusinessSearchComponent implements OnInit {

  term: String;
  location: String;
  user: String;

  constructor( private businessService: BusinessServiceClient,
               private router: Router,
               private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService.currentUser()
      .subscribe( (user) => {
        this.user = user;
      });
  }

  SearchBusiness(term: String, location: String) {
    this.term = term;
    this.location = location;
    this.router.navigate(['search'],
      {queryParams: {term: this.term, location: this.location}});
  }

}
