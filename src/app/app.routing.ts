import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './navigation/not-found.component';
import { HomeComponent } from './game/home.component';
import { DashboardComponent } from './game/dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'games', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

export const Routing = RouterModule.forRoot(routes);
