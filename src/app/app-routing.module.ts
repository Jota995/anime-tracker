import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/anime-search/anime-search.module').then(m => m.AnimeSearchModule)
  },
  {
    path: 'anime-detail/:animeId',
    loadChildren: () => import('./pages/anime-detail/anime-detail.module').then(m => m.AnimeDetailModule)
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
