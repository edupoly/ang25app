import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoccoredevelopmentComponent } from './poccoredevelopment.component';

describe('PoccoredevelopmentComponent', () => {
  let component: PoccoredevelopmentComponent;
  let fixture: ComponentFixture<PoccoredevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoccoredevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoccoredevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
