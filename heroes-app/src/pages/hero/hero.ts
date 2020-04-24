import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { HeroProvider } from '../../providers/hero/hero';

/**
 * Generated class for the HeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero',
  templateUrl: 'hero.html',
})
export class HeroPage {

  public HEROES: Hero[];

  // public HEROES: Hero[] = [
  //   { id: 11, name: 'Mr. Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public heroProvider: HeroProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroPage');
  }

  ionViewDidEnter() {
    this.heroProvider.getHeroes().subscribe((heroes: Hero[]) => {
      this.HEROES = heroes;
    });
  }

  public openDetails(hero: Hero) {
    this.navCtrl.push("HeroDetailsPage", {
      hero: hero
    });
  }

}
