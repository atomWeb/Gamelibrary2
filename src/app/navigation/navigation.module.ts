import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MainNavToolbarComponent } from './main-nav-toolbar.component';
import { AppAuthButtonComponent } from './app-auth-button.component';
import { FooterToolbarComponent } from './footer-toolbar.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    MainNavToolbarComponent,
    AppAuthButtonComponent,
    FooterToolbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  exports: [
    MainNavToolbarComponent,
    AppAuthButtonComponent,
    FooterToolbarComponent,
  ],
})
export class NavigationModule {}
