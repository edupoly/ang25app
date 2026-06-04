import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCropsComponent } from './farmer-crops.component';

describe('FarmerCropsComponent', () => {
  let component: FarmerCropsComponent;
  let fixture: ComponentFixture<FarmerCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerCropsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
