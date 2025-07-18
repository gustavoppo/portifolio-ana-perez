import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHighlights } from './hero-highlights';

describe('HeroHighlights', () => {
  let component: HeroHighlights;
  let fixture: ComponentFixture<HeroHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroHighlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
