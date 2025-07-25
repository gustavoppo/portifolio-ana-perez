import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'button-cta',
  imports: [ButtonModule, RouterModule],
  templateUrl: './button-cta.html',
  styleUrl: './button-cta.css',
})
export class ButtonCta {}
