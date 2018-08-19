import { Component, OnInit } from '@angular/core';
import {BusinessServiceClient} from '../../services/business.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-business.detail',
  templateUrl: './business.detail.component.html',
  styleUrls: ['./business.detail.component.css']
})
export class BusinessDetailComponent implements OnInit {
  businessId: string;
  name: string;
  image: any;
  ratings: any;
  number: string;
  images = [];
  business = {};
  hours = [];
  days = [];
  reviews = [];
  order = {};
  positions = [];
  center: string;
  user: any;
  services = {};
  city: string;
  shouldShow: boolean;
  loading = false;

  constructor( private businessService: BusinessServiceClient,
               private activatedRoute: ActivatedRoute,
               private router: Router,
               private userService: UserServiceClient) { }

  SearchBusinessById(id: String) {
    this.businessService.SearchBusinessById(id)
      .subscribe( (result) => {
        this.name = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.business = result;
      });
  }
  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.businessId = params['businessId'];
        });

    this.businessService.SearchBusinessById(this.businessId)
      .subscribe( (result) => {
        console.log(result);
        const coordinates = result['coordinates'];
        this.name = result.name;
        this.image = result.image_url;
        this.ratings = result.rating;
        this.number = result.phone;
        this.images = result.photos;
        this.business = result;
        this.positions = [[coordinates['latitude'], coordinates['longitude']]];
        this.center = coordinates['latitude'].toString() + ', ' + coordinates['longitude'].toString();
        if (result.hours) {
          this.hours = result.hours[0]['open'];
        }
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.city = result.location['city'];
        this.loading = false;
      });
  }
  categories(cats) {
    if (cats) {
      return cats.map(a => a.title).join(', ');
    } else {
      return '';
    }
  }
}
