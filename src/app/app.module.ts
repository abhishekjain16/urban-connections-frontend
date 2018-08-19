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

@NgModule({
  declarations: [
    AppComponent,
    BusinessDetailComponent,
    BusinessListComponent,
    BusinessSearchComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
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
