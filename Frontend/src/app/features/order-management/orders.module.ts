import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderHistoryPageComponent } from './order-history-page/order-history-page.component';
import { OrderDetailsPageComponent } from './order-details-page/order-details-page.component';

@NgModule({
  declarations: [
    OrderHistoryPageComponent,
    OrderDetailsPageComponent
  ],
  imports: [SharedModule, RouterModule, OrdersRoutingModule]
})
export class OrdersModule {}


