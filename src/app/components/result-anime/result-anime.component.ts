import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit, OnDestroy {

  subs:Subscription = new Subscription();

  ResultAnimes$ = this.animeService.getResultAnime()

  isLoading:boolean = false;

  resultAnimes!:Anime[];

  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {

    this.subs.add(this.animeService.is_loading.subscribe(result => this.isLoading = result))
    this.subs.add(this.ResultAnimes$.subscribe(data => this.resultAnimes = data))
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
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
