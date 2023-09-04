import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';
import { ShareService } from '../services/share.service';
import { Song } from '../models/genius';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public geniusService: GeniusService, public shareService: ShareService) {
    this.geniusService.getMonthSongs();
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
