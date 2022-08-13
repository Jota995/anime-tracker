import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit, OnDestroy {

  animesSelected:Array<MyAnime> = [];
  subscription!: Subscription

  constructor(private animeService:AnimeService) { }
  
  ngOnInit(): void {
    this.subscription = this.animeService.getAnimeSelected().subscribe((animeSelected:MyAnime)=>{
      this.animesSelected.push(animeSelected)
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  increaseWatch(anime:MyAnime){
    anime.watched_episodes++;
  }

  decreaseWatch(anime:MyAnime){
    anime.watched_episodes--;
  }
}
