import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyPartyOverviewPageComponent } from './my-party-overview-page/my-party-overview-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyPartyOverviewPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: 'overview',
        component: MyPartyOverviewPageComponent,
      },
    ]),
  ],
})
export class PartyModule {}
