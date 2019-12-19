import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TeamsComponent} from './teams/teams.component';
import {PlayersComponent} from './players/players.component';
import {SinglePlayerComponent} from './single-player/single-player.component';
import {FixturesComponent} from './fixtures/fixtures.component';
import {ResultsComponent} from './results/results.component';
import {TablePointComponent} from './table-point/table-point.component';
import {GroupsComponent} from './groups/groups.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NotFoundComponent} from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'team-list',
    component: TeamsComponent,
  },
  {
    path: 'player-list',
    component: PlayersComponent,
  },
  {
    path: 'single-player',
    component: SinglePlayerComponent,
  },
  {
    path: 'fixtures',
    component: FixturesComponent,
  },
  {
    path: 'results',
    component: ResultsComponent,
  },
  {
    path: 'point-table',
    component: TablePointComponent,
  },
  {
    path: 'groups',
    component: GroupsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
