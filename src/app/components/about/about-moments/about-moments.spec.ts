import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoments } from './about-moments';

describe('AboutMoments', () => {
  let component: AboutMoments;
  let fixture: ComponentFixture<AboutMoments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMoments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMoments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
