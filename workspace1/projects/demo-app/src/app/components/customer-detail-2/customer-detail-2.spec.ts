import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetail2 } from './customer-detail-2';

describe('CustomerDetail2', () => {
  let component: CustomerDetail2;
  let fixture: ComponentFixture<CustomerDetail2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetail2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetail2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
