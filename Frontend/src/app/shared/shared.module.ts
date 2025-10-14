import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe
  ],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe
  ]
})
export class SharedModule {}


