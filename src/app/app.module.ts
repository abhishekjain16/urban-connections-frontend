import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BusinessDetailComponent } from './components/business.detail/business.detail.component';
import { BusinessListComponent } from './components/business.list/business.list.component';
import { BusinessSearchComponent } from './components/business.search/business.search.component';
import {BusinessServiceClient} from './services/business.service.client';
import {UserServiceClient} from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    BusinessDetailComponent,
    BusinessListComponent,
    BusinessSearchComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    Routing,
    BrowserModule
  ],
  providers: [BusinessServiceClient, UserServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
