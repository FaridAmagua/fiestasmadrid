import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlspartyComponent } from './pages/girlsparty/girlsparty.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'    
  },
  { path: 'chicas', 
  component: GirlspartyComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
