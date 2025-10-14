import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'catalog', loadChildren: () => import('./features/product-catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'checkout', loadChildren: () => import('./features/cart-checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'orders', loadChildren: () => import('./features/order-management/orders.module').then(m => m.OrdersModule) },
  { path: 'admin', loadChildren: () => import('./features/admin-dashboard/admin.module').then(m => m.AdminModule) },
  { path: '**', redirectTo: 'catalog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


