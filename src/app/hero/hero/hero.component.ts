import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name : string = 'Senna';
  public age : number = 29;

  get capitalizeName():string{
    return this.name.toUpperCase()
  }
  getHeroDescription():string{
    return `${this.name}- ${this.age}`
  }

  changeHero():void{
    this.name = `Spiderman`

  }

  changeAgeHero():void{

    this.age = 22
  }

  resetForm():void{
    this.name = 'Senna';
    this.age = 29;
  }
}
