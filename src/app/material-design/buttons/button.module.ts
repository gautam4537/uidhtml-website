import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatButtonComponent } from './mat-button/mat-button.component';
import { MatRaisedButtonComponent } from './mat-raised-button/mat-raised-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    MatButtonComponent,
    MatRaisedButtonComponent
  ],
  declarations: [
    MatButtonComponent,
    MatRaisedButtonComponent
  ]
})
export class ButtonModule { }
