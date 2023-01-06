import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRestaurantComponent } from './system-restaurant.component';

describe('SystemRestaurantComponent', () => {
  let component: SystemRestaurantComponent;
  let fixture: ComponentFixture<SystemRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
