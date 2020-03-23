import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'productos', component: ProductosListComponent},                        
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  