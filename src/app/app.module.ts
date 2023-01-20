
/**
 * @description: Import angular modules
 */
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 * @description: Import Third Party Libraries
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from "ngx-toastr";

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
import { ServerHeaderInterceptorService } from './core/services/interceptors/server-header-interceptor.service';
import { ROOT_REDUCERS } from './core/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects, ProviderEffects } from './core/state/effects';
import { MasterStateEffects } from './core/state/effects/master-state/master-state.effects';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-right",
      enableHtml: true, 
      preventDuplicates: true,
      closeButton: true
    }),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([AuthEffects, ProviderEffects, MasterStateEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptorService,
      multi:true
    }, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerHeaderInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
