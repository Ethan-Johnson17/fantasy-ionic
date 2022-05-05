import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTeamPageComponent } from './pages/my-team-page/my-team-page.component';
import { FindPlayersPageComponent } from './pages/find-players-page/find-players-page.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PlayersComponent } from './components/players/players.component';

@NgModule({
  declarations: [
    MyTeamPageComponent,
    FindPlayersPageComponent,
    PlayersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
