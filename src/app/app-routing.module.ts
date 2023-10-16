import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirlspartyComponent } from './pages/girlsparty/girlsparty.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'    
  },
  { path: 'chicas', 
  component: GirlspartyComponent },
  { path: 'contact', 
  component: ContactComponent},
  //listProducts
  { path: 'list', 
  component: ListCardsComponent},
  //addProducts
  {path: 'add',
  component: AddEditProductComponent
  },
  {path: 'edit/:id',
  component: AddEditProductComponent
  },

//always last component
  // { path: '**', 
  // redirectTo: '', pathMatch: 'full' 
  // },  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
