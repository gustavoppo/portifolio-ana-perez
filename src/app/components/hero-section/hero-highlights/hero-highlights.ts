import { Component } from '@angular/core';
interface HeroHighlight {
  highlight: string;
  description: string;
}
@Component({
  selector: 'hero-highlights',
  imports: [],
  templateUrl: './hero-highlights.html',
  styleUrl: './hero-highlights.css',
})
export class HeroHighlights {
  hero: HeroHighlight[] = [
    {
      highlight: '+4',
      description: 'Anos com Libras e Acessibilidade Digital',
    },
    {
      highlight: '+6',
      description: 'Projetos com Impacto Social',
    },
    {
      highlight: '3',
      description: 'Formações Acadêmicas',
    },
  ];
}
