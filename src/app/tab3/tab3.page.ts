import { Component } from '@angular/core';
import { GeniusService } from '../services/genius.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public geniusService: GeniusService ) {
    this.geniusService.getMonthSongs();
  }

}
