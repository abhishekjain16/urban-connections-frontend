import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BusinessDetailComponent} from './components/business.detail/business.detail.component';
import {BusinessListComponent} from './components/business.list/business.list.component';
import {BusinessSearchComponent} from './components/business.search/business.search.component';
import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {AuthGuard} from './services/auth-guard.service';
import {AdminUserListComponent} from './components/admin/admin-user-list/admin-user-list.component';
import {AdminUserDetailComponent} from './components/admin/admin-user-detail/admin-user-detail.component';
import {AdminBusinessListComponent} from './components/admin/admin-business-list/admin-business-list.component';
import {AdminBusinessDetailComponent} from './components/admin/admin-business-detail/admin-business-detail.component';
import {OwnerBusinessListComponent} from './components/owner/owner-business-list/owner-business-list.component';
import {OwnerBusinessDetailComponent} from './components/owner/owner-business-detail/owner-business-detail.component';
import {OwnerStaffListComponent} from './components/owner/owner-staff-list/owner-staff-list.component';
import {OwnerStaffDetailComponent} from './components/owner/owner-staff-detail/owner-staff-detail.component';
import {OwnerStaffNewComponent} from './components/owner/owner-staff-new/owner-staff-new.component';
import {OwnerServiceListComponent} from './components/owner/owner-service-list/owner-service-list.component';
import {OwnerServiceNewComponent} from './components/owner/owner-service-new/owner-service-new.component';
import {OwnerServiceDetailComponent} from './components/owner/owner-service-detail/owner-service-detail.component';
import {StaffOrderDetailComponent} from './components/staff/staff-order-detail/staff-order-detail.component';
import {StaffOrderListComponent} from './components/staff/staff-order-list/staff-order-list.component';
import {OwnerOrderListComponent} from './components/owner/owner-order-list/owner-order-list.component';
import {OwnerOrderDetailComponent} from './components/owner/owner-order-detail/owner-order-detail.component';
import {OwnerRegistrationComponent} from './components/user/owner-registration/owner-registration.component';
import {OrderDetailComponent} from './components/order/order-detail/order-detail.component';
import {OrderCheckoutComponent} from './components/order/order-checkout/order-checkout.component';
import {OrderCompleteComponent} from './components/order/order-complete/order-complete.component';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {AdminUserRegisterComponent} from './components/admin/admin-user-register/admin-user-register.component';

const APP_ROUTES: Routes = [
  {path: '', component : BusinessSearchComponent},
  {path: 'business/:businessId', component: BusinessDetailComponent},
  {path: 'search', component: BusinessListComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'orders', component: OrderListComponent, canActivate: [AuthGuard]},
  {path: 'business/:businessId/register', component: OwnerRegistrationComponent},
  {path: 'business/:businessId/order/:id', component: OrderDetailComponent, canActivate: [AuthGuard]},
  {path: 'business/:businessId/order/:id/checkout', component: OrderCheckoutComponent, canActivate: [AuthGuard]},
  {path: 'business/:businessId/order/:id/complete', component: OrderCompleteComponent, canActivate: [AuthGuard]},
  {path: 'admin/user', component: AdminUserListComponent, canActivate: [AuthGuard]},
  {path: 'admin/user/new', component: AdminUserRegisterComponent, canActivate: [AuthGuard]},
  {path: 'admin/user/:id', component: AdminUserDetailComponent, canActivate: [AuthGuard]},
  {path: 'admin/business', component: AdminBusinessListComponent, canActivate: [AuthGuard]},
  {path: 'admin/business/:id', component: AdminBusinessDetailComponent, canActivate: [AuthGuard]},
  {path: 'owner/business', component: OwnerBusinessListComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:id', component: OwnerBusinessDetailComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/staff', component: OwnerStaffListComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/staff/new', component: OwnerStaffNewComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/staff/:id', component: OwnerStaffDetailComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/service', component: OwnerServiceListComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/service/new', component: OwnerServiceNewComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/service/:id', component: OwnerServiceDetailComponent, canActivate: [AuthGuard]},
  {path: 'staff/order', component: StaffOrderListComponent, canActivate:[AuthGuard]},
  {path: 'staff/order/:orderId', component: StaffOrderDetailComponent, canActivate:[AuthGuard]},
  {path: 'owner/business/:businessId/order', component: OwnerOrderListComponent, canActivate: [AuthGuard]},
  {path: 'owner/business/:businessId/order/:id', component: OwnerOrderDetailComponent, canActivate: [AuthGuard]},
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
