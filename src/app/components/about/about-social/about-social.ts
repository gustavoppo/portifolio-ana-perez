import { Component } from '@angular/core';
import { ButtonCta } from '../../shared/button-cta/button-cta';

@Component({
  selector: 'about-social',
  imports: [ButtonCta],
  templateUrl: './about-social.html',
  styleUrl: './about-social.css',
})
export class AboutSocial {
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'assets/icons/linkedin-white.svg',
      url: 'https://www.linkedin.com/in/ana-paula-perez-palandi/',
    },
    {
      name: 'GitHub',
      icon: 'assets/icons/github-white.svg',
      url: 'https://github.com/Anapaulapalandi',
    },
    {
      name: 'Instagram',
      icon: 'assets/icons/instagram-white.svg',
      url: 'https://www.instagram.com/aninhapaulaperez?igsh=MTFjMTgwdHk3ejl6Mg==',
    },
  ];
}
