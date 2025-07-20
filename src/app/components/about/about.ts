import { Component } from '@angular/core';
import { AboutSpotify } from './about-spotify/about-spotify';
import { AboutResume } from './about-resume/about-resume';
import { AboutMoments } from './about-moments/about-moments';
import { AboutSocial } from './about-social/about-social';

@Component({
  selector: 'about',
  imports: [AboutSpotify, AboutResume, AboutMoments, AboutSocial],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
