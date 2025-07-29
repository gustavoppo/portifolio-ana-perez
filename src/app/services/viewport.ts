import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ViewportService {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId);
  screenWidth = signal<number>(0);

  constructor() {
    if (this.isBrowser) {
      const updateSize = () => {
        this.screenWidth.set(window.innerWidth);
      };

      updateSize();
      window.addEventListener('resize', updateSize);
    }
  }

  isLargeDisplay(minWidth = 1024) {
    return this.screenWidth().valueOf() >= minWidth;
  }

  isSmallDisplay(maxWidth = 1023) {
    return this.screenWidth().valueOf() <= maxWidth;
  }
}
