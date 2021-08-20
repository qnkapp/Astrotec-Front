import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ForumComponent } from './forum/forum.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {component: BoutiqueComponent, path:'boutique'},
  {component: AccueilComponent, path:'Accueil'},
  {component: LoginComponent, path:'connexion'},
  {component: ForumComponent, path:'forum'},
  {component: CatalogueComponent, path:'catalogue'},
  {component: SignUpComponent, path: 'sign-up'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
