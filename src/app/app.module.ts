import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { EquiposComponent } from './equipos/equipos.component';
import { ActividadesComponent } from './actividades/actividades.component';

const routes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'equipos', component:EquiposComponent},
  {path:'actividades', component:ActividadesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EquiposComponent,
    ActividadesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
