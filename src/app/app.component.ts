import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'My Team', url: '/my-team/overview', icon: 'american-football' },
    { title: 'My Party', url: '/my-party/overview', icon: 'color-wand' },
    { title: 'League', url: '/folder/Favorites', icon: 'people' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public teamSubpages = [
    { title: 'Roster', url: '/my-team/roster', icon: 'people' },
  ];
  public partySubpages = [
    { title: 'Roster', url: '/my-team/roster', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public route: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route = this.router.routerState.snapshot.url;
    console.log(this.route);
  }
}
