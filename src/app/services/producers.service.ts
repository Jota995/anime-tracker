import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, finalize, map } from 'rxjs';
import { APIProducers, Producers } from '../interfaces/api-producers';

@Injectable({
  providedIn: 'root'
})
export class ProducersService {

  private API_URL = "https://api.jikan.moe/v4/producers";

  private producers_response$ = new Subject<Array<any>>();
  public is_loading = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  getProducers():Observable<Array<Producers>>{
    this.is_loading.next(true)
    return this.http.get<APIProducers>(`${this.API_URL}`).pipe(
      map((result:APIProducers) =>{
        return result.data
      }),
      finalize(() => this.is_loading.next(false ))
    )
  }

  addResultProducers(producers:Array<Producers>){
    this.producers_response$.next(producers)
  }

  getResultProducers():Observable<Array<Producers>>{
    return this.producers_response$.asObservable();
  }
}
