import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public geniusService: GeniusService, public shareService: ShareService) {
    this.geniusService.getDaySongs();
  }

  share() {
    this.shareService.shareApp();
  }

  // add a share button to the template



}
