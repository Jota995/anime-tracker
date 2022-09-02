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
export class AnimeDetailComponent implements OnInit {
  animeId:string | null = this.route.snapshot.paramMap.get('animeId');
  anime$ = this.animeService.getAnimeById(this.animeId)
  characters$ = this.animeService.getAnimeCharacters(this.animeId)

  constructor(private animeService:AnimeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
