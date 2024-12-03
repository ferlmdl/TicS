import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FoodComponent } from './food/food.component';
//import { SpecificFoodComponent } from './specific-food/specific-food.component';

export const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home-routing.module').then(m => m.HomeRoutingModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'recetas', loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule) },
  { path: 'food', component: FoodComponent },
  //{ path: 'specific-food/:id', component: SpecificFoodComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
