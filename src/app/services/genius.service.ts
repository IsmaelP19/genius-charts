import { Injectable } from '@angular/core';
import { Song } from '../models/genius';
import axios from 'axios';
import { combineLatest } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GeniusService {
  // Cached data
  songsDay: Song[] = [];
  songsWeek: Song[] = [];
  songsMonth: Song[] = [];

  // Urls
  GENIUS_BASE_URL: string;
  RAPID_API_KEY: string;
  headers: any;
  params: any;


  constructor() {
    this.GENIUS_BASE_URL = 'https://genius-song-lyrics1.p.rapidapi.com/chart/songs/';
    this.RAPID_API_KEY = environment.RAPID_API_KEY;
    this.headers = {
      'x-rapidapi-key': this.RAPID_API_KEY,
      'x-rapidapi-host': 'genius-song-lyrics1.p.rapidapi.com'
    }
    this.params = {
      'page': '1',
      'per_page': '10',
      // aquí tmb irá el time_period que definamos en cada función
    }
  }

  public async getDaySongs(): Promise<any> {
    const params = { ...this.params, time_period: 'day' };
    const response = await axios.get(`${this.GENIUS_BASE_URL}`, { headers: this.headers, params })
    this.songsDay = this.mapSongs(response);
  }

  public async getWeekSongs(): Promise<any> {
    const params = { ...this.params, time_period: 'week' };
    const response = await axios.get(`${this.GENIUS_BASE_URL}`, { headers: this.headers, params })
    this.songsWeek = this.mapSongs(response);
  }

  public async getMonthSongs(): Promise<any> {
    const params = { ...this.params, time_period: 'month' };
    const response = await axios.get(`${this.GENIUS_BASE_URL}`, { headers: this.headers, params })
    this.songsMonth = this.mapSongs(response);
  }

  // function that gets the response.data from the axios request and maps it to the Song model
  private mapSongs(response: any): Song[] {
    return response.data.chart_items.map((chart_item: any) => {
      return {
        id: chart_item.item.id,
        title: chart_item.item.title,
        artist: {
          id: chart_item.item.primary_artist.id,
          name: chart_item.item.primary_artist.name,
          image: chart_item.item.primary_artist.image_url,
        },
        cover: chart_item.item.song_art_image_url,
      }
    });
  }

}
