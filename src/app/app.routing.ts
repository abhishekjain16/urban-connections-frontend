import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {BusinessDetailComponent} from './components/business.detail/business.detail.component';
import {BusinessListComponent} from './components/business.list/business.list.component';
import {BusinessSearchComponent} from './components/business.search/business.search.component';

const APP_ROUTES: Routes = [
  {path: '', component : BusinessSearchComponent},
  {path: 'business/:businessId', component: BusinessDetailComponent},
  {path: 'search', component: BusinessListComponent},
  // {path: 'orders', component: UserOrderListComponent, canActivate: [AuthGuard]},
  // {path: 'restaurant/:restaurantId/order/:orderId', component: OrderDetailComponent, canActivate: [AuthGuard]},
  // {path: 'restaurant/:restaurantId/order/:orderId/checkout', component: OrderCheckoutComponent, canActivate: [AuthGuard]},
  // {path: 'restaurant/:restaurantId/order/:orderId/complete', component: OrderCompleteComponent},
  // {path: 'restaurant/:restaurantId/register', component: ManagerRegisterComponent},
  // {path: 'manager/restaurant/:restaurantId', component: ManagerDashboardComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/order', component: ManagerOrderComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/order/:orderId', component: ManagerOrderDetailsComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/driver', component: DriverListComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/chef', component: ChefListComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu', component: MenuListComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu/new', component: MenuNewComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu/:menuId', component: MenuEditComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/new', component: MenuItemNewComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem', component: MenuItemListComponent, canActivate: [AuthGuard]},
  // {path: 'manager/restaurant/:restaurantId/menu/:menuId/menuItem/:menuItemId', component: MenuItemEditComponent, canActivate: [AuthGuard]},
  // {path: 'restaurant/:restaurantId/chef/register', component: ChefRegisterComponent},
  // {path: 'chef/restaurant/:restaurantId/order', component: ChefOrderListComponent, canActivate: [AuthGuard]},
  // {path: 'chef/restaurant/:restaurantId/order/:orderId', component: ChefOrderDetailComponent, canActivate: [AuthGuard]},
  // {path: 'restaurant/:restaurantId/driver/register', component: DriverRegisterComponent},
  // {path: 'driver/restaurant/:restaurantId/order', component: DriverOrderListComponent, canActivate: [AuthGuard]},
  // {path: 'driver/restaurant/:restaurantId/order/:orderId', component: DriverOrderDetailComponent, canActivate: [AuthGuard]},
  // {path: 'admin/customer', component: AdminUserListComponent, canActivate: [AuthGuard]},
  // {path: 'admin/customer/:userId', component: AdminUserEditComponent, canActivate:[AuthGuard]},
  // {path: 'admin/manager', component: AdminManagerListComponent, canActivate: [AuthGuard]},
  // {path: 'admin/manager/:managerId', component: AdminManagerDetailComponent, canActivate: [AuthGuard]},
  // {path: 'admin/restaurant/:restaurantId/chef', component: ChefListComponent, canActivate: [AuthGuard]},
  // {path: 'admin/restaurant/:restaurantId/chef/:chefId', component: ChefEditComponent, canActivate: [AuthGuard]},
  // {path: 'admin/restaurant/:restaurantId/driver', component: DriverListComponent, canActivate: [AuthGuard]},
  // {path: 'admin/restaurant/:restaurantId/driver/:driverId', component: DriverEditComponent, canActivate: [AuthGuard]},
  // {path: 'admin/restaurant/:restaurantId/order', component: OrderListComponent, canActivate: [AuthGuard]},
  // {path: 'admin/profile', component: AdminDashboardComponent, canActivate: [AuthGuard]}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
