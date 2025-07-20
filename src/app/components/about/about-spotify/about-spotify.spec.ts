import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSpotify } from './about-spotify';

describe('AboutSpotify', () => {
  let component: AboutSpotify;
  let fixture: ComponentFixture<AboutSpotify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSpotify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSpotify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
