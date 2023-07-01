import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HappyBirthdayRoutingModule } from './happy-birthday-routing.module';
import { HappyBirthdayComponent } from './happy-birthday.component';


@NgModule({
  declarations: [
    HappyBirthdayComponent
  ],
  imports: [
    CommonModule,
    HappyBirthdayRoutingModule
  ]
})
export class HappyBirthdayModule { }
