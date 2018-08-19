import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import {BusinessServiceClient} from '../../../services/business.service.client';

@Component({
  selector: 'app-owner-business-list',
  templateUrl: './owner-business-list.component.html',
  styleUrls: ['./owner-business-list.component.css']
})
export class OwnerBusinessListComponent implements OnInit {
  businesses = [];
  user = {};

  constructor(private activatedRoute: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router,
              private businessService: BusinessServiceClient) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    if (this.user['type'] !== 'Owner') {
      this.router.navigate(['/']);
    }

    this.businessService.findBusinessesByOwner()
      .subscribe(
        (businesses: any) => {
          this.businesses = businesses;
        }
      );
  }

}
