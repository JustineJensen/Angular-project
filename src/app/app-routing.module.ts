import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { QutoesComponent } from './pages/qutoes/qutoes.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'aboutUs', component:AboutUsComponent,data: { noBackground: true }  },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'contactUs', component: ContactUsComponent},
  {path:'quote-form',component:QutoesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
