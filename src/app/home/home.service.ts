import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Home } from './home';
import { HOME } from './home.json';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getHome():Observable<Home[]>{
    return of(HOME);
  }
}