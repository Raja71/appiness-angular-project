import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

declare const window: any;

@Injectable({ providedIn: 'root' })

//this service is to detect internet if it finds automatically it will reload
export class OnlineOfflineService {
  internalConnectionChanged = new Subject<boolean>();

  get connectionChanged() {
    return this.internalConnectionChanged.asObservable();
  }

  get isOnline() {
    return !!window.navigator.onLine;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if(isPlatformBrowser(this.platformId)) {
      window.addEventListener('online', () => this.updateOnlineStatus());
      window.addEventListener('offline', () => this.updateOnlineStatus());
    }
  }

  updateOnlineStatus() {
    this.internalConnectionChanged.next(window.navigator.onLine);
  }
}