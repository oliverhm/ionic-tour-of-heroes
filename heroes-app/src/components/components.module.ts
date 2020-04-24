import { NgModule } from '@angular/core';
import { HeroButtonComponent } from './hero-button/hero-button';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [HeroButtonComponent],
	imports: [IonicModule],
	exports: [HeroButtonComponent]
})
export class ComponentsModule {}
