import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { RankingComponent } from './ranking.component';
import { PositionComponent } from './components/position/position.component';


@NgModule({
  declarations: [
    RankingComponent,
    PositionComponent
  ],
  imports: [
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
