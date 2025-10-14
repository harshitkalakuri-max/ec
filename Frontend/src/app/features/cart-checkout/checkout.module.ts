import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { PaymentSelectionComponent } from './components/payment-selection/payment-selection.component';

@NgModule({
  declarations: [
    CartPageComponent,
    CheckoutPageComponent,
    CartItemComponent,
    AddressFormComponent,
    PaymentSelectionComponent
  ],
  imports: [SharedModule, RouterModule, CheckoutRoutingModule]
})
export class CheckoutModule {}


