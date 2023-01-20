import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHelperBannerComponent } from './restaurant-helper-banner.component';

describe('RestaurantHelperBannerComponent', () => {
  let component: RestaurantHelperBannerComponent;
  let fixture: ComponentFixture<RestaurantHelperBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantHelperBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantHelperBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
