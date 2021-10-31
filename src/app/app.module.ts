import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

import { SearchComponent } from './components/search/search.component';

import { ContentContactPageComponent } from './components/content-contact-page/content-contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { DevenirProprietaireComponent } from './pages/devenir-proprietaire/devenir-proprietaire.component';
import { CguComponent } from './pages/cgu/cgu.component';
import { HomeComponent } from './pages/home/home.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { HebergementListingComponent } from './components/hebergement-listing/hebergement-listing.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageHousesComponent } from './pages/page-houses/page-houses.component';
import { PageAjoutHebergementComponent } from './pages/page-ajout-hebergement/page-ajout-hebergement.component';
import { AjoutHebergementFormComponent } from './components/ajout-hebergement-form/ajout-hebergement-form.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { PageHouseDetailsComponent } from './pages/page-house-details/page-house-details.component';
import { FormCompteComponent } from './components/form-compte/form-compte.component';
import { BorderCardDirective } from './directives/border-card.directive';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormContactComponent,
    SearchComponent,
    HeaderComponent,
    NavComponent,
    ContentContactPageComponent,
    LoginComponent,
    RegisterComponent,
    DevenirProprietaireComponent,
    CguComponent,
    HomeComponent,
    PageContactComponent,
    PageRegisterComponent,
    HebergementListingComponent,
    PageHousesComponent,
    PageAjoutHebergementComponent,
    AjoutHebergementFormComponent,
    PageDashboardComponent,
    DashboardComponent,
    MonCompteComponent,
    ReservationsComponent,
    PageHouseDetailsComponent,
    FormCompteComponent,
    BorderCardDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatRippleModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
