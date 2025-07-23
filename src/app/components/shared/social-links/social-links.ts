import { Component, Input, OnInit } from '@angular/core';
export interface SocialLink {
  name: string;
  icon: string;
  hoverIcon: string;
  url: string;
  _currentIcon?: string;
}
@Component({
  selector: 'social-links',
  imports: [],
  templateUrl: './social-links.html',
  styleUrl: './social-links.css',
})
export class SocialLinks implements OnInit {
  @Input({ required: true }) socialLinks: SocialLink[] = [];
  ngOnInit(): void {
    this.socialLinks = this.socialLinks.map((link) => ({
      ...link,
      _currentIcon: link.icon,
    }));
  }
}
