import { BrowserModule } from '@angular/platform-browser';
import {  NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadModuleDirective } from './directives/load-module.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoadModuleDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
