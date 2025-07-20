import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSocial } from './about-social';

describe('AboutSocial', () => {
  let component: AboutSocial;
  let fixture: ComponentFixture<AboutSocial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSocial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSocial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
