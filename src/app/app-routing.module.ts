import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlspartyComponent } from './pages/girlsparty/girlsparty.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta por defecto
  {
    path: 'girlsparty',
    component: GirlspartyComponent,
    children: [
      
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
