import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'hero-card',
  imports: [ButtonModule],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  hero = {
    name: 'Ana Paula',
    description: 'Engenheira de Software',
    imageUrl: 'assets/img/ana.jpg',
  };
}
