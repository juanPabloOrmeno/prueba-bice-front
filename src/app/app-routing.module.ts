import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalleComponent } from './pages/detalle/detalle.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'detalle', component: DetalleComponent},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
