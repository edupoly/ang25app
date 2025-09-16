import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesmasterComponent } from './moviesmaster.component';

describe('MoviesmasterComponent', () => {
  let component: MoviesmasterComponent;
  let fixture: ComponentFixture<MoviesmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesmasterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
