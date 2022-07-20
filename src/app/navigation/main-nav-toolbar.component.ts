import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-main-nav-toolbar',
  templateUrl: './main-nav-toolbar.component.html',
  styleUrls: ['./main-nav-toolbar.component.css'],
})
export class MainNavToolbarComponent implements OnInit {
  title = 'gamelib3';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    @Inject(DOCUMENT) public document: Document,
    public auth0: AuthService
  ) {}

  gameList() {
    this.router.navigateByUrl('/game/list');
  }

  ngOnInit(): void {}
}
