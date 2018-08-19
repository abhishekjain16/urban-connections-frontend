import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RatingModule} from 'ng2-rating';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { LoadingModule } from 'ngx-loading';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BusinessDetailComponent } from './components/business.detail/business.detail.component';
import { BusinessListComponent } from './components/business.list/business.list.component';
import { BusinessSearchComponent } from './components/business.search/business.search.component';
import {BusinessServiceClient} from './services/business.service.client';
import {UserServiceClient} from './services/user.service.client';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import {SharedService} from './services/shared.service';
import {AuthGuard} from './services/auth-guard.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AdminUserListComponent } from './components/admin/admin-user-list/admin-user-list.component';
import { AdminUserDetailComponent } from './components/admin/admin-user-detail/admin-user-detail.component';
import { AdminBusinessDetailComponent } from './components/admin/admin-business-detail/admin-business-detail.component';
import { AdminBusinessListComponent } from './components/admin/admin-business-list/admin-business-list.component';
import { OwnerBusinessListComponent } from './components/owner/owner-business-list/owner-business-list.component';
import { OwnerBusinessDetailComponent } from './components/owner/owner-business-detail/owner-business-detail.component';
import { OwnerStaffListComponent } from './components/owner/owner-staff-list/owner-staff-list.component';
import { OwnerStaffDetailComponent } from './components/owner/owner-staff-detail/owner-staff-detail.component';
import { OwnerStaffNewComponent } from './components/owner/owner-staff-new/owner-staff-new.component';
import { OwnerServiceListComponent } from './components/owner/owner-service-list/owner-service-list.component';
import { OwnerServiceDetailComponent } from './components/owner/owner-service-detail/owner-service-detail.component';
import { OwnerServiceNewComponent } from './components/owner/owner-service-new/owner-service-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessDetailComponent,
    BusinessListComponent,
    BusinessSearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminUserListComponent,
    AdminUserDetailComponent,
    AdminBusinessDetailComponent,
    AdminBusinessListComponent,
    OwnerBusinessListComponent,
    OwnerBusinessDetailComponent,
    OwnerStaffListComponent,
    OwnerStaffDetailComponent,
    OwnerStaffNewComponent,
    OwnerServiceListComponent,
    OwnerServiceDetailComponent,
    OwnerServiceNewComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    Routing,
    BrowserModule,
    RatingModule,
    Ng2CarouselamosModule,
    LoadingModule,
    StorageServiceModule
  ],
  providers: [BusinessServiceClient, UserServiceClient, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
