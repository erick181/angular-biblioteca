import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianReadComponent } from './technician-read.component';

describe('TechnicianReadComponent', () => {
  let component: TechnicianReadComponent;
  let fixture: ComponentFixture<TechnicianReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicianReadComponent]
    });
    fixture = TestBed.createComponent(TechnicianReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
