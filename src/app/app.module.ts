import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GirlspartyComponent } from './pages/girlsparty/girlsparty.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule  } from '@angular/forms';
import { ContactComponent } from './pages/contact/contact.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
//modules
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [    
    AppComponent,
    NavbarComponent,
    GirlspartyComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ListCardsComponent,
    AddEditProductComponent,
    ProgressBarComponent,
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut:10000,
      positionClass:'toast-bottom-right',
      preventDuplicates:true,
    }), //alertas
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
