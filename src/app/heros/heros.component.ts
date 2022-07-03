import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock.heros';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.sass']
})
export class HerosComponent implements OnInit {
  heroes:Hero[] = []
  date = new Date
  constructor(private heroService:HeroService) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes=>{
      this.heroes = heroes
    })
  }
}
