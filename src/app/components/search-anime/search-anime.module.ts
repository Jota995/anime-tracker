import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAnimeComponent } from './search-anime.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchAnimeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SearchAnimeComponent
  ]
})
export class SearchAnimeModule { }
