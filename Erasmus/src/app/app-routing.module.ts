import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { TouristicPlaceComponent } from './touristic-place/touristic-place.component';


import { EventsComponent } from './events/events.component';
import { ErasmusDocumentComponent } from './erasmus-document/erasmus-document.component';
import { CBHEPROJECTComponent } from './cbheproject/cbheproject.component';
import { CrudComponent } from './crud/crud.component';
import { ClubComponent } from './club/club.component';

const routes: Routes = [
  {path: 'Home', component: HeaderComponent},
  {path: 'ContactComponent', component: ContactComponent},
 {path: 'CBHEPROJECTComponent', component: CBHEPROJECTComponent},
  {path: 'MissionComponent', component: MissionComponent},
  {path: 'TeamComponent', component: TeamComponent},
  {path: 'TouristicPlaceComponent', component: TouristicPlaceComponent},
  
  {path: 'ClubComponent', component: ClubComponent},

  {path: 'EventsComponent', component: EventsComponent},
    {path: 'Erasmus-Document', component: ErasmusDocumentComponent},
  {path: 'CrudComponent', component: CrudComponent},
  { path: '**', component: HeaderComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
