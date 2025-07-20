import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResume } from './about-resume';

describe('AboutResume', () => {
  let component: AboutResume;
  let fixture: ComponentFixture<AboutResume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutResume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutResume);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
