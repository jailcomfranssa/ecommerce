import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from '../page/home/home.component'
import { AppComponent } from '../../app/app.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'shopin', component: AppComponent}
]

@NgModule({

  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
