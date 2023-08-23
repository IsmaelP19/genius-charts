export interface Artist {
  id: number; // del song es el item.primary_artist.id
  name: string; // del song es el item.primary_artist.name
  image: string; //del song es el item.primary_artist.image_url
}

export interface Song {
  id: number; // item.id
  title: string; // item.title
  artist: Artist; // item.primary_artist.name
  cover: string; // item.song_art_image_url
}