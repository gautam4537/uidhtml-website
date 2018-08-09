import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './../../login/login.module';
import { AdminLoginComponent } from './admin-login.component';
import { AdminLoginRoutingModule } from './admin-login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminLoginRoutingModule,
    LoginModule
  ],
  declarations: [AdminLoginComponent]
})
export class AdminLoginModule {}
