import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';
// import { PhotoService, UserPhoto } from '../services/photo.service';
// import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public geniusService: GeniusService) {
    this.geniusService.getWeekSongs();
  }
}
