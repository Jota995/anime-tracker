import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest , Subscription } from 'rxjs';
import { Anime, CharacterAnime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit, OnDestroy {
  private subs!:Subscription;
  anime!:any
  animeId:string | null = this.route.snapshot.paramMap.get('animeId');
  animeCharacters!:Array<any>

  constructor(private animeService:AnimeService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.subs = combineLatest([this.animeService.getAnimeById(this.animeId),this.animeService.getAnimeCharacters(this.animeId)])
      .subscribe(([animeResult, charctersResult]) =>{
        this.anime = animeResult;
        this.animeCharacters = charctersResult;
      })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

}
