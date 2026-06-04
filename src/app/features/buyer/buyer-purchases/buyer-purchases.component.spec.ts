import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPurchasesComponent } from './buyer-purchases.component';

describe('BuyerPurchasesComponent', () => {
  let component: BuyerPurchasesComponent;
  let fixture: ComponentFixture<BuyerPurchasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerPurchasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
