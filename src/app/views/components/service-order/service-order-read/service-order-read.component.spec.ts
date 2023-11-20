import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderReadComponent } from './service-order-read.component';

describe('ServiceOrderReadComponent', () => {
  let component: ServiceOrderReadComponent;
  let fixture: ComponentFixture<ServiceOrderReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrderReadComponent]
    });
    fixture = TestBed.createComponent(ServiceOrderReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
