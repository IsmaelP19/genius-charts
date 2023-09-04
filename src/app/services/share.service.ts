import { Injectable } from '@angular/core';
import { Share } from '@capacitor/share';
import { Song } from '../models/genius';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  public async shareApp(song: Song) {
    await Share.share({
      text: 'Estoy como loco escuchando ' + song.title + ' de ' + song.artist.name + '. ¡Es increíble!',
    });
  }
}
