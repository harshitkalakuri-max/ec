import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';

@NgModule({
  declarations: [
    ProductListPageComponent,
    ProductDetailPageComponent,
    ProductCardComponent,
    CategoryFilterComponent
  ],
  imports: [SharedModule, RouterModule, CatalogRoutingModule]
})
export class CatalogModule {}


