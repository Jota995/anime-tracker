import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AnimeRatings } from 'src/app/enums/anime-rating';
import { AnimeScore } from 'src/app/enums/anime-score';
import { AnimeStatus } from 'src/app/enums/anime-status';
import { AnimeType } from 'src/app/enums/anime-type';
import { Producers } from 'src/app/interfaces/api-producers';
import { ProducersService } from 'src/app/services/producers.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  
  @Input() form!:FormGroup;
  animeStatus = Object.values(AnimeStatus);
  animeType = Object.values(AnimeType);
  animeRatings = Object.values(AnimeRatings);
  scores: { index: number, value: string }[] = [];
  animeProducers!:Array<Producers>;
  

  constructor(private producerService:ProducersService) { }

  ngOnInit(): void {
    this.scores = Object.keys(AnimeScore)
    .filter((key: string) => !isNaN(Number(AnimeScore[key as keyof typeof AnimeScore])))
    .map((key: string) => ({ index: AnimeScore[key as keyof typeof AnimeScore], value: key }));

    firstValueFrom(this.producerService.getProducers()).then((result:Array<Producers>) =>{
      console.log("anume productores",result)
      this.animeProducers = result;
    })
  }

}
