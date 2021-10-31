import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CguComponent } from './pages/cgu/cgu.component';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageHousesComponent } from './pages/page-houses/page-houses.component';
import { PageAjoutHebergementComponent } from './pages/page-ajout-hebergement/page-ajout-hebergement.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { PageHouseDetailsComponent } from './pages/page-house-details/page-house-details.component';
import { FormCompteComponent } from './components/form-compte/form-compte.component';
import { DashboardGuardGuard } from './dashboard-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'contact', component: PageContactComponent },
  { path: 'cgu', component: CguComponent },
  { path: 'hebergement', component: PageHousesComponent },
  { path: 'ajout-hebergement', component: PageAjoutHebergementComponent },
  { path: 'dashboard', component: PageDashboardComponent, canActivate: [DashboardGuardGuard] },
  { path: 'dashboard/mon-compte/:email', component: MonCompteComponent },
  { path: 'dashboard/reservations/:id', component: ReservationsComponent },
  { path: 'house/:id', component: PageHouseDetailsComponent },
  { path: 'form-compte', component: FormCompteComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }