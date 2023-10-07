import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindStoreComponent } from './find-store/find-store.component';
import { FindStoreRoutingRoutingModule } from './find-store.routing.module';



@NgModule({
  declarations: [
    FindStoreComponent
  ],
  imports: [
    CommonModule,
    FindStoreRoutingRoutingModule
  ]
})
export class FindStoreModule { }
