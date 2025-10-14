import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { AnalyticsReportPageComponent } from './analytics-report-page/analytics-report-page.component';

@NgModule({
  declarations: [
    ProductCrudComponent,
    AnalyticsReportPageComponent
  ],
  imports: [SharedModule, RouterModule, AdminRoutingModule]
})
export class AdminModule {}


