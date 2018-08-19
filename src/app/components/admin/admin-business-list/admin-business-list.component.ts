import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BusinessServiceClient} from '../../../services/business.service.client';

@Component({
  selector: 'app-admin-business-list',
  templateUrl: './admin-business-list.component.html',
  styleUrls: ['./admin-business-list.component.css']
})
export class AdminBusinessListComponent implements OnInit {
  businesses = [];
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private businessService: BusinessServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Admin') {
      this.router.navigate(['/']);
    }

    this.businessService.findBusinesses()
      .subscribe(
        (businesses: any) => {
          this.businesses = businesses;
        }
      );
  }

}
