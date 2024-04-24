import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actividades } from './actividades';
import { ACTIVIDADES } from './actividades.json';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor() { }

  getActividades():Observable<Actividades[]>{
    return of(ACTIVIDADES);
  }
}
