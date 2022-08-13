import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { SearchAnimeComponent } from './components/search-anime/search-anime.component';
import { ResultAnimeComponent } from './components/result-anime/result-anime.component';
import { SelectedAnimeComponent } from './components/selected-anime/selected-anime.component';
import { AnimeDetailComponent } from './pages/anime-detail/anime-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AnimeSearchComponent } from './pages/anime-search/anime-search.component';
import { CharactersAnimeComponent } from './components/characters-anime/characters-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchAnimeComponent,
    ResultAnimeComponent,
    SelectedAnimeComponent,
    AnimeDetailComponent,
    AnimeSearchComponent,
    CharactersAnimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
