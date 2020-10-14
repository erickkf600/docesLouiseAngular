import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeContainerRoutingModule } from './home-container-routing.module';
import { HomeContainerComponent } from './home-container.component';

@NgModule({
  declarations: [HomeContainerComponent],
  imports: [
    CommonModule,
    HomeContainerRoutingModule
  ],
  providers: [],

})
export class HomeContainerModule { }