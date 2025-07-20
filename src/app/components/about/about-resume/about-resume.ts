import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-resume',
  imports: [],
  templateUrl: './about-resume.html',
  styleUrl: './about-resume.css',
})
export class AboutResume implements OnInit {
  about = {
    description: `Olá! Sou Ana Paula, estudante de Engenharia de Software com formação em Pedagogia e especialização em Libras e Braille. \n
Minha trajetória sempre foi movida pelo desejo de tornar o conhecimento acessível para todas as pessoas — e encontrei na tecnologia uma forma poderosa de transformar essa missão em realidade.\n
Tenho experiência como intérprete de Libras no ensino superior e audiovisual, além de projetos práticos que unem desenvolvimento e inclusão.\n
Acredito que a tecnologia deve ser inclusiva por padrão, e estou em constante evolução para criar soluções que realmente façam a diferença.`,
  };
  formattedDescription: string = '';
  ngOnInit(): void {
    this.formattedDescription = this.about.description.replace(/\n/g, '<br>');
  }
}
