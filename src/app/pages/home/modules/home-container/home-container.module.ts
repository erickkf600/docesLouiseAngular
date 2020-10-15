import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeContainerRoutingModule } from './home-container-routing.module';
import { HomeContainerComponent } from './home-container.component';
import { ViewHomeComponent } from './view/view-home/view-home.component';

@NgModule({
  declarations: [HomeContainerComponent, ViewHomeComponent],
  imports: [
    CommonModule,
    HomeContainerRoutingModule
  ],
  providers: [],

})
export class HomeContainerModule { }