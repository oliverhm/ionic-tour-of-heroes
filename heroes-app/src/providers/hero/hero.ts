import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../app/hero';

/*
  Generated class for the HeroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()                               
export class HeroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello HeroProvider Provider');
  }

  public getHeroes(): Observable<Hero[]> {
    return this.http.get('http://localhost:1337/heroes') as Observable<Hero[]>;
  }

  public addHero(newHero: Hero): Observable<Hero> {
    return this.http.post('http://localhost:1337/heroes', newHero) as Observable<Hero>;
  }

  public deleteHero(hero: Hero): Observable<Hero> { 
    return this.http.delete(`http://localhost:1337/heroes/${hero.id}`) as Observable<Hero>;
  
  }

  public editHero(hero: Hero): Observable<Hero> {
    return this.http.patch(`http://localhost:1337/heroes/${hero.id}`, hero) as Observable<Hero>;
  }
}
