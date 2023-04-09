import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedAnimeComponent } from './selected-anime.component';



@NgModule({
  declarations: [SelectedAnimeComponent],
  imports: [
    CommonModule
  ],
  exports:[
    SelectedAnimeComponent
  ]
})
export class SelectedAnimeModule { }
