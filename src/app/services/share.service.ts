import { Injectable } from '@angular/core';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  public async shareApp() {
    await Share.share({
      title: 'Mira!!',
      text: 'Prueba esta nueva aplicación para descubrir la música más top',
      url: 'https://github.com/IsmaelP19/genius-charts',
      dialogTitle: 'Comparte con tus amigos'
    });
  }
}
