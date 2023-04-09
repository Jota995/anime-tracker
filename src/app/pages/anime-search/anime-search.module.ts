import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeSearchRoutingModule } from './anime-search-routing.module';
import { AnimeSearchComponent } from './anime-search.component';
import { ResultAnimeModule } from 'src/app/components/result-anime/result-anime.module';
import { SelectedAnimeModule } from 'src/app/components/selected-anime/selected-anime.module';
import { SearchAnimeModule } from 'src/app/components/search-anime/search-anime.module';


@NgModule({
  declarations: [
    AnimeSearchComponent
  ],
  imports: [
    CommonModule,
    AnimeSearchRoutingModule,
    ResultAnimeModule,
    SelectedAnimeModule,
    SearchAnimeModule

  ],
  exports:[
  ]
})
export class AnimeSearchModule { }
