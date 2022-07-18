import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent  {

  powers = ["Genius", "Magician", "Strength", "Invisibility"];
  hero = new Hero(1, "Dr. Salvatore", "Magician", "Salvatore Sorrentino");

  onSubmit(): void {
    console.log('Form submitted');
    console.log(this.hero);
  }

  newHero(): void {
    this.hero = new Hero(42, '', '', '');
  }

}
