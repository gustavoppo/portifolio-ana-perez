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
    { title: 'Festa junina no DCTA', img: 'assets/img/cta.jpg' },
    { title: '' },
  ];
}
