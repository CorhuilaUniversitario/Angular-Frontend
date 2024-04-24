import { Component, OnInit } from '@angular/core';
import { Actividades } from './actividades';
import { ActividadesService } from './actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})

export class ActividadesComponent implements OnInit{
  
  actividades: Actividades[];

  constructor(private actividadesService: ActividadesService){}
  
  ngOnInit(): void {
    this.actividadesService.getActividades().subscribe(
      actividades => this.actividades = actividades
    );
  }

}
