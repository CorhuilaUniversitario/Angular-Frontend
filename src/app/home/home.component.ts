import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  home: Home[];
  
  constructor(private homeService: HomeService){}
  
  ngOnInit(): void {
    this.homeService.getHome().subscribe(
      home => this.home = home
    );
  }

}
