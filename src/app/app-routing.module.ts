import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {AnimeDetailComponent} from "./pages/anime-detail/anime-detail.component"
import {AnimeSearchComponent} from "./pages/anime-search/anime-search.component"

const routes: Routes = [
  {
    path: '',
    component:AnimeSearchComponent
  },
  {
    path: 'browse-anime',
    component:AnimeSearchComponent
  },
  {
    path: 'anime-detail/:animeId',
    component: AnimeDetailComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
