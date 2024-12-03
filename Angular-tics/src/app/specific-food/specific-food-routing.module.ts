import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecificFoodComponent } from './specific-food.component';

const routes: Routes = [
  { path: '', component: SpecificFoodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecificFoodRoutingModule { }
