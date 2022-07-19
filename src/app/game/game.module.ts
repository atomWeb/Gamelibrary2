import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { GameRoutesModule } from './game-routes.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GameListComponent } from './game-list.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, GameListComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    GameRoutesModule,
  ],
  exports: [HomeComponent],
})
export class GameModule {}
