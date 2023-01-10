import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSystemNavBarComponent } from './shared-system-nav-bar.component';

describe('SharedSystemNavBarComponent', () => {
  let component: SharedSystemNavBarComponent;
  let fixture: ComponentFixture<SharedSystemNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSystemNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedSystemNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
