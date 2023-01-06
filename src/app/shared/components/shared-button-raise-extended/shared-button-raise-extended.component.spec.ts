import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedButtonRaiseExtendedComponent } from './shared-button-raise-extended.component';

describe('SharedButtonRaiseExtendedComponent', () => {
  let component: SharedButtonRaiseExtendedComponent;
  let fixture: ComponentFixture<SharedButtonRaiseExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedButtonRaiseExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedButtonRaiseExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
