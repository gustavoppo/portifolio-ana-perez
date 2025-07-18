import { Component } from '@angular/core';
import { ExperienceCarousel } from './experience-carousel/experience-carousel';
interface ExperienceDetail {
  title: string;
  description: string;
  highlight: string;
}
@Component({
  selector: 'experience',
  imports: [ExperienceCarousel],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experienceDetails: ExperienceDetail = {
    title: 'Code',
    description: 'Explore meus códigos',
    highlight: 'Time',
  };
}
