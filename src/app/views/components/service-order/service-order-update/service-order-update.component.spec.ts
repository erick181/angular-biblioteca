import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOrderUpdateComponent } from './service-order-update.component';

describe('ServiceOrderUpdateComponent', () => {
  let component: ServiceOrderUpdateComponent;
  let fixture: ComponentFixture<ServiceOrderUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOrderUpdateComponent]
    });
    fixture = TestBed.createComponent(ServiceOrderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
