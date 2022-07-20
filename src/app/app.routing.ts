import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './navigation/not-found.component';
import { HomeComponent } from './game/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'game',
    loadChildren: () =>
      import('./game/game-routes.module').then((m) => m.GameRoutesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

export const Routing = RouterModule.forRoot(routes);
