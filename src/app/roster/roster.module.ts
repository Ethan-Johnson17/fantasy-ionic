import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamPageComponent } from './pages/my-team-page/my-team-page.component';
import { FindPlayersPageComponent } from './pages/find-players-page/find-players-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'overview',
        component: MyTeamPageComponent,
      },
      {
        path: 'find-players',
        component: FindPlayersPageComponent,
      },
      {
        path: 'player-details/:id',
        component: FindPlayersPageComponent,
      },
    ]),
  ],
})
export class RosterModule {}
