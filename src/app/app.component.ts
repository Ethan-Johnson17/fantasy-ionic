import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'My Team', url: '/my-team/overview', icon: 'american-football' },
    { title: 'My Party', url: '/my-party/overview', icon: 'color-wand' },
    { title: 'League', url: '/folder/Favorites', icon: 'people' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public teamSubpages = [
    { title: 'Overview', url: '/my-team/overview', icon: 'american-football' },
    { title: 'Roster', url: '/my-team/roster', icon: 'people' },
    { title: 'Add Players', url: '/my-team/find-players', icon: 'person-add' },
    { title: 'Schedule', url: '/my-team/schedule', icon: 'calendar' },
  ];
  public partySubpages = [
    { title: 'Overview', url: '/my-party/overview', icon: 'color-wand' },
    { title: 'Characters', url: '/my-party/characters', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public route: string;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  setRoute(route: string) {
    this.route = route;
  }
}
