import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../app/hero';
import { HeroProvider } from '../../providers/hero/hero';

/**
 * Generated class for the HeroDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hero-details',
  templateUrl: 'hero-details.html',
})
export class HeroDetailsPage {
  public hero: Hero;
  public newHero: boolean = false;
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public heroProvider: HeroProvider) {
    this.hero = navParams.get('hero');
    if (!this.hero) {
      this.hero = new Hero();
      this.newHero = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroDetailsPage');
  }
  
  public save() {
    if (this.newHero) {
      this.addHero();
    } else {
      this.editHero();
    }
  }

  private editHero() {
    this.heroProvider.editHero(this.hero).subscribe(() => {
      this.navCtrl.pop();
    });
  }

  private addHero() {
    this.heroProvider.addHero(this.hero).subscribe(() => {
      this.navCtrl.pop();
    });
  }

  public delete() {
    this.heroProvider.deleteHero(this.hero).subscribe(() => {
      this.navCtrl.pop();
    });
  }

}
