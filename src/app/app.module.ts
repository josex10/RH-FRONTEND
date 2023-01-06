
/**
 * @description: Import angular modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

/**
 * @description: Import Third Party Libraries
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * @description: Import internal modules of the app
 */
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

/**
 * @description: Import Services
 */
import { ServerErrorInterceptorService } from "./core/services/interceptors/server-error-interceptor.service";

/** 
 * @description: Import Components
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
