import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatetrainingComponent } from './corporatetraining.component';

describe('CorporatetrainingComponent', () => {
  let component: CorporatetrainingComponent;
  let fixture: ComponentFixture<CorporatetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporatetrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporatetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
