import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {

  searchTerm!:string;

  constructor(private animeService:AnimeService) { }

  ngOnInit(): void {
  }

  searchAnime(){
    this.animeService.getAnimes(this.searchTerm).subscribe((result:Array<Anime>) =>{
      console.log('result', result)
      this.animeService.addResultAnime(result);
    })
  }


}
