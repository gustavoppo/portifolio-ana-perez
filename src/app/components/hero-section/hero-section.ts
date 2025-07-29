import {
  Component,
  computed,
  inject,
  Input,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { ButtonCta } from '../shared/button-cta/button-cta';
import { HeroCard } from './hero-card/hero-card';
import { HeroDescription } from './hero-description/hero-description';
import { HeroHighlights } from './hero-highlights/hero-highlights';
import { HeroStacks } from './hero-stacks/hero-stacks';
import { ViewportService } from '../../services/viewport';

@Component({
  selector: 'hero-section',
  imports: [HeroCard, HeroDescription, HeroHighlights, HeroStacks, ButtonCta],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() id?: string;

  public viewport: ViewportService = inject(ViewportService);
  readonly largeDisplay = computed(() => this.viewport.screenWidth() < 1023);
}
