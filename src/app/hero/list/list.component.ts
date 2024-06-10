import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroName :string[] =['Senna','Batman','Superman','Aquaman','Gatubela']
  public removeHero?:string;

  deleteLastHero():void{
  this.removeHero =  this.heroName.pop()
  }
}
