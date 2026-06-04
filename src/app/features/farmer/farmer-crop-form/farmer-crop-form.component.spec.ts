import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerCropFormComponent } from './farmer-crop-form.component';

describe('FarmerCropFormComponent', () => {
  let component: FarmerCropFormComponent;
  let fixture: ComponentFixture<FarmerCropFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FarmerCropFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerCropFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
