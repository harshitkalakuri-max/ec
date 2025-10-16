import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { AnalyticsReportPageComponent } from './analytics-report-page/analytics-report-page.component';

@NgModule({
  imports: [
    RouterModule,
    AdminRoutingModule,
    ProductCrudComponent,
    AnalyticsReportPageComponent,
  ],
  declarations: [],
})
export class AdminModule {}


