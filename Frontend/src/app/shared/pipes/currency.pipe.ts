import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appCurrency' })
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencyCode: string = 'USD'): string {
    try {
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: currencyCode }).format(value);
    } catch {
      return `${value}`;
    }
  }
}


