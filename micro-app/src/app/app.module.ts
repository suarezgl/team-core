import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}

  public ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('micro-app', appElement);
  }
}
