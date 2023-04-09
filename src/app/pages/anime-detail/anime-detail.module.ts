import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeDetailRoutingModule } from './anime-detail-routing.module';
import { AnimeDetailComponent } from './anime-detail.component';



@NgModule({
  declarations: [
    AnimeDetailComponent
  ],
  imports: [
    CommonModule,
    AnimeDetailRoutingModule,
  ],
  exports:[
    AnimeDetailComponent
  ]
})
export class AnimeDetailModule { }
