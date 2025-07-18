import { Component } from '@angular/core';
import { HeroCard } from './hero-card/hero-card';
import { HeroDescription } from './hero-description/hero-description';
import { HeroHighlights } from './hero-highlights/hero-highlights';
import { HeroStacks } from './hero-stacks/hero-stacks';
import { ButtonCta } from '../shared/button-cta/button-cta';
import { Experience } from '../experience/experience';

@Component({
  selector: 'hero-section',
  imports: [
    HeroCard,
    HeroDescription,
    HeroHighlights,
    HeroStacks,
    ButtonCta,
    Experience,
  ],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
