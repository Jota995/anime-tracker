import { Component, OnInit } from '@angular/core';
import { Anime, MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit {

  ResultAnimes$ = this.animeService.getResultAnime()

  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
   
  }

  addToMyAnimeList(anime:Anime){
    const newAnime:MyAnime = {
      id: anime.mal_id,
      title: anime.title,
      image: anime.images['jpg'].image_url,
      total_episodes: anime.episodes,
      watched_episodes: 0
    }

    this.animeService.animeSelected(newAnime);
  }

}
