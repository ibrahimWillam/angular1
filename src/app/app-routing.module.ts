import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,title:'home'},
  {path:'about',component:AboutComponent,title:'about'},
  {path:'portofolio',component:PortofolioComponent,title:'portofolio'},
  {path:'contact',component:ContactComponent,title:'contact'},
  {path:'',redirectTo:'home',pathMatch:'full',title:'home'},
















  {path:'**',component:NotFoundComponent,title:'notFound'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
