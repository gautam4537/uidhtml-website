import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PreloaderModule } from './preloader/preloader.module';
// AppRouterModule for Root
import { AppRouterModule } from './app.router.module';
// Url Module

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    PreloaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
