import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { DashboardComponent } from './dashboard.component';
import { GameListComponent } from './game-list.component';

const GameRoutes: Routes = [
  // { path: 'auth', component: AuthComponent },
  {
    path: 'game',
    component: DashboardComponent,
    children: [{ path: 'list', component: GameListComponent }],
    canActivate: [AuthGuard],
  },
  // { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forChild(GameRoutes)],
  exports: [RouterModule],
})
export class GameRoutesModule {}
