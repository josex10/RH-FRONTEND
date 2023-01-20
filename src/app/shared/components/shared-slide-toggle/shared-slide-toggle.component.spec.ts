import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSlideToggleComponent } from './shared-slide-toggle.component';

describe('SharedSlideToggleComponent', () => {
  let component: SharedSlideToggleComponent;
  let fixture: ComponentFixture<SharedSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSlideToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
