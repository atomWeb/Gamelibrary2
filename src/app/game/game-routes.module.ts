import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { GameListComponent } from './game-list.component';

const GameRoutes: Routes = [
  // { path: 'auth', component: AuthComponent },
  {
    path: 'games',
    component: DashboardComponent,
    children: [{ path: 'list', component: GameListComponent }],
  },
  // { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(GameRoutes)],
  exports: [RouterModule],
})
export class GameRoutesModule {}
