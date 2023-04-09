import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeSearchComponent } from './anime-search.component';

const routes: Routes = [
  {
    path: '',
    component: AnimeSearchComponent,
  },
  {
    path: 'browse-anime',
    component:AnimeSearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimeSearchRoutingModule { }
