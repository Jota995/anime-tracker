import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersAnimeComponent } from './characters-anime.component';



@NgModule({
  declarations: [CharactersAnimeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CharactersAnimeComponent
  ]
})
export class CharactersAnimeModule { }
