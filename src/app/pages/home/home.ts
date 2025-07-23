import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { Experience } from '../../components/experience/experience';
import { About } from '../../components/about/about';
import { PersonalFooter } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [HeroSection, Experience, About, PersonalFooter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
