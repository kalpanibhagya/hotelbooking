import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessNSpaComponent } from './wellness-n-spa.component';

describe('WellnessNSpaComponent', () => {
  let component: WellnessNSpaComponent;
  let fixture: ComponentFixture<WellnessNSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessNSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessNSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
