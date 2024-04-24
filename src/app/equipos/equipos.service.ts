import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipos } from './equipos';
import { EQUIPOS } from './equipos.json';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  constructor() { }

  getEquipos():Observable<Equipos[]>{
    return of(EQUIPOS);
  }
}