import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';
import { ShareService } from '../services/share.service';
import { Song } from '../models/genius';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public geniusService: GeniusService, public shareService: ShareService) {
    this.geniusService.getDaySongs();
  }

  isActionSheetOpen = false;
  selectedSong: Song | undefined;

  share(song: Song) {
    this.shareService.shareApp(song);
  }


  public actionSheetButtons = [
    {
      text: 'Compartir',
      icon: 'share-social-outline',
      handler: () => {
        this.share(this.selectedSong!);
      }
    },
    {
      text: 'Cancelar',
      icon: 'close-circle-outline',
      role: 'cancel',
    }
  ]

  setOpen(isOpen: boolean, song: Song | undefined) {
    this.isActionSheetOpen = isOpen;
    this.selectedSong = song;
  }


}
