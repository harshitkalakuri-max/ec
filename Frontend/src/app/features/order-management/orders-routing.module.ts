import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryPageComponent } from './order-history-page/order-history-page.component';
import { OrderDetailsPageComponent } from './order-details-page/order-details-page.component';

const routes: Routes = [
  { path: '', component: OrderHistoryPageComponent },
  { path: ':orderId', component: OrderDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}


