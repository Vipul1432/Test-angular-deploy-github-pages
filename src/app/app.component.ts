import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  environmentName = '';
  title = 'Test';
  constructor() {
    this.environmentName = process.env['NG_APP_Test'] ?? '';
  }
}
