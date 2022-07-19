import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-toolbar',
  templateUrl: './footer-toolbar.component.html',
  styleUrls: ['./footer-toolbar.component.css'],
})
export class FooterToolbarComponent {
  copyrightYear: string;

  constructor() {
    this.copyrightYear = new Date().getFullYear().toString();
  }
}
