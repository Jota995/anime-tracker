import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchAnimeComponent } from './search-anime.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';



@NgModule({
  declarations: [SearchAnimeComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    SearchAnimeComponent,
    SearchFilterComponent
  ]
})
export class SearchAnimeModule { }
