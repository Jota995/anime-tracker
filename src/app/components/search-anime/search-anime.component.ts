import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, filter,distinct, Subject, takeUntil} from 'rxjs';
import { AnimeStatus } from 'src/app/enums/anime-status';
import { Anime } from 'src/app/interfaces/api-anime';
import { AnimeService } from 'src/app/services/anime.service';
import { AnimeType } from 'src/app/enums/anime-type';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface SearchFilter{
  status:AnimeStatus,
  type:AnimeType,
  q: string
}

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit, OnDestroy {

  searchTerm!:string;
  searchFilter!:SearchFilter;
  form!:FormGroup;
  private destroy$:Subject<boolean> = new Subject<boolean>();

  constructor(
    private animeService:AnimeService,
    private router:Router,
    private activateRoute:ActivatedRoute,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.buildForm()
    this.activateRoute
      .queryParamMap
      .pipe(
        takeUntil(this.destroy$),
        filter(data => data.get('q') != undefined && data.get('q')!.length > 1),
        distinct()
      )
      .subscribe(async (param) =>{
        this.searchFilter = {
          status: param.get('status') as AnimeStatus || '',
          type: param.get('type') as AnimeType || '',
          q: param.get('q')?.trim() as string || ''
        }

        this.form.patchValue(this.searchFilter)
        await firstValueFrom(this.animeService.getAnimes(this.searchFilter))
          .then((result:Array<Anime>) =>{
            console.log("anime result",result)
            this.animeService.addResultAnime(result || []);
            this.searchTerm = param.get('q')?.trim() || ''
          })
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  buildForm(){
    const form = this.fb.group({
      q:[null],
      type:[null],
      status:[null],
      score:[null],
      rated:[null],
      producers:[null],
      start_date:[null],
      end_date:[null]
    })

    return form
  }

  searchAnime(){
    console.log("form",this.form.getRawValue())
    this.form.patchValue({
      q:this.searchTerm
    })
    this.router.navigate(['/browse-anime'],{queryParams:this.form.getRawValue()})
  }


}
