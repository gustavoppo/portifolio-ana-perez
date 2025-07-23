import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SocialLink, SocialLinks } from '../shared/social-links/social-links';

@Component({
  selector: 'cta',
  imports: [Button, SocialLinks],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class Cta {
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
}
