import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStacks } from './hero-stacks';

describe('HeroStacks', () => {
  let component: HeroStacks;
  let fixture: ComponentFixture<HeroStacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroStacks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroStacks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
