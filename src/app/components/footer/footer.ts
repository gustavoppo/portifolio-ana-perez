import { Component } from '@angular/core';
import { SocialLink, SocialLinks } from '../shared/social-links/social-links';
import { Developer } from './developer/developer';

@Component({
  selector: 'personal-footer',
  imports: [SocialLinks, Developer],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class PersonalFooter {
  persona = {
    name: 'Ana Paula',
    description:
      'Estudante de Engenharia de Software, com foco em acessibilidade, tecnologia e educação. Acredito que a tecnologia deve ser inclusiva por padrão.',
  };

  socialList: SocialLink[] = [
    {
      name: 'LinkedIn',
      icon: 'assets/icons/linkedin-white.svg',
      hoverIcon: 'assets/icons/linkedin-pink.svg',
      url: 'https://www.linkedin.com/in/ana-paula-perez-palandi/',
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/github-white.svg',
      hoverIcon: 'assets/icons/github-pink.svg',
      url: 'https://github.com/Anapaulapalandi',
    },
    {
      name: 'Instagram',
      icon: 'assets/icons/instagram-white.svg',
      hoverIcon: 'assets/icons/instagram-pink.svg',
      url: 'https://www.instagram.com/aninhapaulaperez?igsh=MTFjMTgwdHk3ejl6Mg==',
    },
  ];

  pesonalLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre mim', href: '#about' },
  ];

  pesonalResources = [
    {
      name: 'Download Currículo',
      util: 'assets/curriculo.pdf',
      isDownload: true,
    },
    {
      name: 'Meu Github',
      util: 'https://github.com/Anapaulapalandi',
      isDownload: false,
    },
    {
      name: 'WhatsApp',
      util: 'https://wa.me/+5511975049931',
      isDownload: false,
    },
  ];
}
