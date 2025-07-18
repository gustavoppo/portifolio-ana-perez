import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDescription } from './hero-description';

describe('HeroDescription', () => {
  let component: HeroDescription;
  let fixture: ComponentFixture<HeroDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
