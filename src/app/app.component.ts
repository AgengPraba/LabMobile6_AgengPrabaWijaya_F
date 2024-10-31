import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail', code: '1' },
    { title: 'Logout', url: '/folder/outbox', icon: 'log-out', code: '2' },
  ];

  constructor() {}
}
