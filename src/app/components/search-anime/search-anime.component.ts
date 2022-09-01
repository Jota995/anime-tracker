import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, firstValueFrom, filter,distinct} from 'rxjs';
import { Anime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit, OnDestroy {

  searchTerm!:string;

  private subs:Subscription = new Subscription();

  constructor(
    private animeService:AnimeService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subs = this.activateRoute
      .queryParamMap
      .pipe(
        filter(data => data.get('anime') != undefined && data.get('anime')!.length > 1),
        distinct()
      )
      .subscribe(async (param) =>{
        await firstValueFrom(this.animeService.getAnimes(param.get('anime')?.trim() || ''))
          .then((result:Array<Anime>) =>{
            this.animeService.addResultAnime(result || []);
            this.searchTerm = param.get('anime')?.trim() || ''
          })
      })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  searchAnime(){
    this.router.navigate(['/browse-anime'],{queryParams:{anime:this.searchTerm.trim()}})
  }


}
