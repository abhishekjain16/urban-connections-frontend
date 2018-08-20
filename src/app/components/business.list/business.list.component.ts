import { Component, OnInit } from '@angular/core';
import { BusinessServiceClient} from '../../services/business.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-business.list',
  templateUrl: './business.list.component.html',
  styleUrls: ['./business.list.component.css']
})
export class BusinessListComponent implements OnInit {
  term: String;
  location: String;
  result: any;
  businesses: any;
  user: String;
  loading = false;

  constructor(private businessService: BusinessServiceClient,
              private userService: UserServiceClient,
              private  activatedRoute: ActivatedRoute,
              private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.queryParams
      .subscribe(
        (params: any) => {
          this.term = params['term'];
          this.location = params['location'];
        }
      );
    this.userService.currentUser()
      .subscribe( (user) => {
        this.user = user;
      });

    this.businessService.searchBusiness(this.term, this.location )
      .subscribe( (result) => {
        this.result = result;
        this.businesses = result['businesses'];
        this.loading = false;
      });
  }

  SearchBusiness(term: String, location: String) {
    this.term = term;
    this.location = location;
    this.router.navigate(['search'],
      {queryParams: {term: this.term, location: this.location}});
  }

}
