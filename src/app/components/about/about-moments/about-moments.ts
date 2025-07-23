import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'about-moments',
  imports: [ImageModule],
  templateUrl: './about-moments.html',
  styleUrl: './about-moments.css',
})
export class AboutMoments {
  moments = [
    {
      title: 'Festa junina no DCTA com a família Perez Palandi',
      url: 'assets/img/cta.jpg',
    },
    {
      title: 'Ana, Gustavo e o Francisco com uma flor roxa',
      url: 'assets/img/flor.jpg',
    },
    {
      title: 'Francisco fazendo manha para dormir, deitado no ombro de Ana',
      url: 'assets/img/apoio.jpg',
    },
    {
      title: 'Escadinha da família Perez Palandi',
      url: 'assets/img/escada.jpg',
    },
  ];
}
