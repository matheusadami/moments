import { Component, OnInit } from '@angular/core';

import { Moment } from '@core/models/moment.model';
import { MomentService } from '@core/services/moment.service';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  baseApiUrl: string = environment.baseApiUrl;
  moments: Moment[] = [];
  searchedMoments: Moment[] = [];

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.getMoments();
  }

  async getMoments() {
    var response = await this.momentService.getMoments();
    this.moments = response.data ?? [];
    this.searchedMoments = Array.from(this.moments);
  }

  async searchMoments(event: Event) {
    var value = (event.target as HTMLInputElement).value;

    this.searchedMoments = this.moments.filter((m) =>
      m.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
