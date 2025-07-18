import { Component } from '@angular/core';

@Component({
  selector: 'hero-description',
  imports: [],
  templateUrl: './hero-description.html',
  styleUrl: './hero-description.css',
})
export class HeroDescription {
  title: string = ' Transformando Inclusão em ';
  highlight: string = 'Soluções Digitais';
  subtitle: string =
    'Sou Ana Paula, estudante de Engenharia de Software, apaixonada por acessibilidade, tecnologia e educação. Acredito que a tecnologia deve ser inclusiva por padrão e trabalho todos os dias para que isso aconteça.';

  constructor() {
    // Initialization logic can go here
  }
}
