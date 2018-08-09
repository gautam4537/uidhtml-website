import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material Integration
import { MaterialModule } from './../material.module';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [LoginComponent],
    exports: [CommonModule, MaterialModule, LoginComponent]
})

export class LoginModule {}
