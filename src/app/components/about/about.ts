import { Component, Input } from '@angular/core';
import { AboutSpotify } from './about-spotify/about-spotify';
import { AboutResume } from './about-resume/about-resume';
import { AboutMoments } from './about-moments/about-moments';
import { SocialLink, SocialLinks } from '../shared/social-links/social-links';
import { ButtonCta } from '../shared/button-cta/button-cta';

@Component({
  selector: 'about',
  imports: [AboutSpotify, AboutResume, AboutMoments, SocialLinks, ButtonCta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  @Input() id?: string;
  mobile: boolean = true;
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
