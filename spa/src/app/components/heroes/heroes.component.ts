import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {

	heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService) { 
  	console.log('constructor');
  }

  ngOnInit() {
  	console.log('ngOnInit');
  	this.heroes = this._heroesService.getHeroes();
  }

}
