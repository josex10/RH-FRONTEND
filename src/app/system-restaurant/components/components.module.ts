import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RestaurantHelperBannerComponent } from './restaurant-helper-banner/restaurant-helper-banner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    RestaurantHelperBannerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports:[
    HeaderComponent,
    SideMenuComponent,
    RestaurantHelperBannerComponent
  ]
})
export class ComponentsModule { }
