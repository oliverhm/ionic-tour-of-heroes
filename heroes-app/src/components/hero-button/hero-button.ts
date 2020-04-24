import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../app/hero';

/**
 * Generated class for the HeroButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hero-button',
  templateUrl: 'hero-button.html'
})
export class HeroButtonComponent {

  @Input() hero: Hero;
  @Output() clickButton = new EventEmitter<Hero>();

  constructor() {
  }

  public click(){
    this.clickButton.emit(this.hero);
  }

}
