import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersCreateComponent } from './providers-create.component';

describe('ProvidersCreateComponent', () => {
  let component: ProvidersCreateComponent;
  let fixture: ComponentFixture<ProvidersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvidersCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
