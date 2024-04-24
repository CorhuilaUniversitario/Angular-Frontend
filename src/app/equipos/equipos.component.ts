import { Component, OnInit } from '@angular/core';
import { Equipos } from './equipos';
import { EquiposService } from './equipos.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  
  equipos: Equipos[];
  
  constructor(private equiposService: EquiposService){}
  
  ngOnInit(): void {
    this.equiposService.getEquipos().subscribe(
      equipos => this.equipos = equipos
    );
  }

}
