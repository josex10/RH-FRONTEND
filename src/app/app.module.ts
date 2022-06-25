
/**
 * @description: Import angular modules
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * @description: Import internal modules of the app
 */
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UtilModule } from './util/util.module';

/**
 * @description: Import Angular Material Modules
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    CoreModule,
    UtilModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
