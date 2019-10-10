import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourStepComponent } from './four-step.component';

describe('FourStepComponent', () => {
  let component: FourStepComponent;
  let fixture: ComponentFixture<FourStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
