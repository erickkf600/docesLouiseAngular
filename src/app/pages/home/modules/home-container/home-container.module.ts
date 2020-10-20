import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeContainerRoutingModule } from './home-container-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { HomeInicialComponent } from './components/home-inicial/home-inicial.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeDeliveryComponent } from './components/home-delivery/home-delivery.component';
import { OurCakesComponent } from './components/our-cakes/our-cakes.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    HomeContainerComponent, 
    HomeInicialComponent, 
    AboutUsComponent, 
    HomeDeliveryComponent, OurCakesComponent, AddressComponent
  ],
  imports: [
    CommonModule,
    HomeContainerRoutingModule
  ],
  providers: [],

})
export class HomeContainerModule { }