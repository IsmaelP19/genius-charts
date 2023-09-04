import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';
import { Song } from '../models/genius';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public geniusService: GeniusService, public shareService: ShareService) {
    this.geniusService.getWeekSongs();
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
