import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { SharedModule } from '../../modules/shared/shared.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    PaginationModule,
    AlertModule,
    SharedModule
  ]
})
export class DashboardModule {
}

