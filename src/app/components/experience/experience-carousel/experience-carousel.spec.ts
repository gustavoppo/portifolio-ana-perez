import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCarousel } from './experience-carousel';

describe('ExperienceCarousel', () => {
  let component: ExperienceCarousel;
  let fixture: ComponentFixture<ExperienceCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
