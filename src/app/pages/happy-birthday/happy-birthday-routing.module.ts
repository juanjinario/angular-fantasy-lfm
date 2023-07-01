import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HappyBirthdayComponent } from './happy-birthday.component';

const routes: Routes = [{ path: '', component: HappyBirthdayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HappyBirthdayRoutingModule { }
