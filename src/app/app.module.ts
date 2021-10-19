import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { GoogleMapsModule } from '@angular/google-maps';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MapComponent } from './core/components/map/map.component';
import { ListComponent } from './core/components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
