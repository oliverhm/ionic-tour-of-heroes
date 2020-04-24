import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroDetailsPage } from './hero-details';
import { HttpClientModule } from '@angular/common/http';
import { HeroProvider } from '../../providers/hero/hero';

@NgModule({
  declarations: [
    HeroDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroDetailsPage),
    HttpClientModule
  ],
  providers: [
    HeroProvider
  ]

})
export class HeroDetailsPageModule {}
