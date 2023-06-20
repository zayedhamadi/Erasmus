import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BoddyComponent } from './boddy/boddy.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { TouristicPlaceComponent } from './touristic-place/touristic-place.component';


import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErasmusDocumentComponent } from './erasmus-document/erasmus-document.component';
import { CBHEPROJECTComponent } from './cbheproject/cbheproject.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { ListeventComponent } from './listevent/listevent.component';
import { ClubComponent } from './club/club.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoddyComponent,
    ContactComponent,
    MissionComponent,
    TeamComponent,
    TouristicPlaceComponent,

    EventsComponent,
    NavbarComponent,
    ErasmusDocumentComponent,
    CBHEPROJECTComponent,
    CrudComponent,
    ListeventComponent,
    ClubComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule // Import RouterModule here if you want to use routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
