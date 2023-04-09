import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultAnimeComponent } from './result-anime.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ResultAnimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ResultAnimeComponent,
    FormsModule
  ]
})
export class ResultAnimeModule { }
