import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemincdecComponent } from './itemincdec.component';

describe('ItemincdecComponent', () => {
  let component: ItemincdecComponent;
  let fixture: ComponentFixture<ItemincdecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemincdecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemincdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
