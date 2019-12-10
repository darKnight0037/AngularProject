import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from '../app/components/contact/contact.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'contact',component:ContactComponent},
  {path:'',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
