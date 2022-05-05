import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team-page.component.html',
  styleUrls: ['./my-team-page.component.scss'],
})
export class MyTeamPageComponent implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
