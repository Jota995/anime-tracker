import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map , tap} from 'rxjs/operators';
import { Anime, APIAnime, CharacterAnime, MyAnime } from '../interfaces/api-anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private API_URL = "https://api.jikan.moe/v4/anime";

  private anime_response$ = new Subject<Array<Anime>>();

  private anime_selected$ = new Subject<MyAnime>();


  constructor(private http:HttpClient) { }

  getAnimes(searchTerm:string):Observable<Array<Anime>>{
    return this.http.get<APIAnime>(`${this.API_URL}?q=${searchTerm}`).pipe(
      map((result:APIAnime) =>{
        return result.data
      })
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
    return this.http.get<any>(`${this.API_URL}/${id}`).pipe(
      tap(console.log),
      map((result:any) => {
        return result.data
      })
    )
  }

  getAnimeCharacters(id:string | null):Observable<Array<CharacterAnime>>{
    return this.http.get<any>(`${this.API_URL}/${id}/characters`).pipe(
      tap(console.log),
      map((result:any) => {
        return result.data
      })
    )
  }

  
}
