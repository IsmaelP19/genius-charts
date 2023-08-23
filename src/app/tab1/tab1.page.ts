import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public geniusService: GeniusService ) {
    this.geniusService.getDaySongs();
  }


}
