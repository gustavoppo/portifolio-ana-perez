import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCta } from './button-cta';

describe('ButtonCta', () => {
  let component: ButtonCta;
  let fixture: ComponentFixture<ButtonCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
