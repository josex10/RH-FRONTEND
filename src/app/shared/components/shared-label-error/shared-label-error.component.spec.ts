import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLabelErrorComponent } from './shared-label-error.component';

describe('SharedLabelErrorComponent', () => {
  let component: SharedLabelErrorComponent;
  let fixture: ComponentFixture<SharedLabelErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedLabelErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedLabelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
