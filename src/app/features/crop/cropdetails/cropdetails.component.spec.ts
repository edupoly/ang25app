import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropdetailsComponent } from './cropdetails.component';

describe('CropdetailsComponent', () => {
  let component: CropdetailsComponent;
  let fixture: ComponentFixture<CropdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
