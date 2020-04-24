import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroPage } from './hero';
import { ComponentsModule } from '../../components/components.module'
import { HeroProvider } from '../../providers/hero/hero';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeroPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroPage),
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    HeroProvider
  ]
})
export class HeroPageModule {}
