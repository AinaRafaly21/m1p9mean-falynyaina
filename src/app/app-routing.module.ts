import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ProposComponent } from './propos/propos.component';
import { PlatComponent } from './plat/plat.component';
import { CommandeencoursComponent } from './commandeencours/commandeencours.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'menu', component:MenuComponent },
  {path:'plat', component:PlatComponent },
  {path:'propos', component:ProposComponent },
  {path:'commandeencours', component:CommandeencoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
