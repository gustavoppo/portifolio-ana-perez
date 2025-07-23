import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {
  SocialLink,
  SocialLinks,
} from '../../shared/social-links/social-links';
@Component({
  selector: 'hero-card',
  imports: [ButtonModule, SocialLinks],
  templateUrl: './hero-card.html',
  styleUrl: './hero-card.css',
})
export class HeroCard {
  hero = {
    name: 'Ana Paula',
    description: 'Engenheira de Software',
    imageUrl: 'assets/img/ana.jpg',
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
    {
      name: 'Email',
      icon: 'assets/icons/mail-white.svg',
      hoverIcon: 'assets/icons/mail-pink.svg',
      url: 'mailto:aninha_paulaperez@hotmail.com',
    },
  ];
}
