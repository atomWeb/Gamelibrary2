import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [HomeComponent, DashboardComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
  ],
  exports: [HomeComponent],
})
export class GameModule {}
