import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { finalize, map , tap} from 'rxjs/operators';
import { Anime, APIAnime, CharacterAnime, MyAnime } from '../interfaces/api-anime';
import { SearchFilter } from '../components/search-anime/search-anime.component';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private API_URL = "https://api.jikan.moe/v4/anime";

  private anime_response$ = new Subject<Array<Anime>>();

  private anime_selected$ = new Subject<MyAnime>();

  public is_loading = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  getAnimes(search:SearchFilter):Observable<Array<Anime>>{
    console.log("service",search)
    this.is_loading.next(true)
    return this.http.get<APIAnime>(`${this.API_URL}?q=${search.q}&status=${search.status}&type=${search.type}`).pipe(
      map((result:APIAnime) =>{
        return result.data
      }),
      finalize(() => this.is_loading.next(false ))
    )
  }

  addResultAnime(anime:Array<Anime>){
    this.anime_response$.next(anime);
  }

  getResultAnime():Observable<Array<Anime>>{
    return this.anime_response$.asObservable();
  }

  animeSelected(anime:MyAnime){
    this.anime_selected$.next(anime);
  }

  getAnimeSelected():Observable<MyAnime>{
    return this.anime_selected$.asObservable();
  }

  getAnimeById(id:string | null):Observable<any>{
    this.is_loading.next(true)
    return this.http.get<any>(`${this.API_URL}/${id}`).pipe(
      map((result:any) => {
        return result.data
      }),
      finalize(() => this.is_loading.next(false ))
    )
  }

  getAnimeCharacters(id:string | null):Observable<Array<CharacterAnime>>{
    this.is_loading.next(true)
    return this.http.get<any>(`${this.API_URL}/${id}/characters`).pipe(
      map((result:any) => {
        return result.data
      }),
      finalize(() => this.is_loading.next(false ))
    )
  }

  
}
