import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule],
  exports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ]
})
export class SharedModule {}


