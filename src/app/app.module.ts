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
import { StaffOrderListComponent } from './components/staff/staff-order-list/staff-order-list.component';
import { StaffOrderDetailComponent } from './components/staff/staff-order-detail/staff-order-detail.component';
import {ServiceClient} from './services/service.client';
import { OwnerOrderListComponent } from './components/owner/owner-order-list/owner-order-list.component';
import { OwnerOrderDetailComponent } from './components/owner/owner-order-detail/owner-order-detail.component';
import {OrderServiceClient} from './services/order.service.client';
import { NguiMapModule} from '@ngui/map';
import { OwnerRegistrationComponent } from './components/user/owner-registration/owner-registration.component';
import { OrderCheckoutComponent } from './components/order/order-checkout/order-checkout.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderCompleteComponent } from './components/order/order-complete/order-complete.component';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import {OrderItemServiceClient} from './services/orderItem.service.client';
import { AdminUserRegisterComponent } from './components/admin/admin-user-register/admin-user-register.component';

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
    OwnerServiceNewComponent,
    StaffOrderListComponent,
    StaffOrderDetailComponent,
    OwnerOrderListComponent,
    OwnerOrderDetailComponent,
    OwnerRegistrationComponent,
    OrderCheckoutComponent,
    OrderListComponent,
    OrderCompleteComponent,
    OrderDetailComponent,
    AdminUserRegisterComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    Routing,
    BrowserModule,
    RatingModule,
    Ng2CarouselamosModule,
    LoadingModule,
    StorageServiceModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBx7TyjfNDQveTpb4yxjcrqGV0eU39iSkc'}),
    LoadingModule,
  ],
  providers: [BusinessServiceClient, UserServiceClient, SharedService, AuthGuard, ServiceClient, OrderServiceClient, OrderItemServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
