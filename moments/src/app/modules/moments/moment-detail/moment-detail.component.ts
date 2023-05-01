import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moment } from '@core/models/moment.model';
import { MomentService } from '@core/services/moment.service';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-moment-detail',
  templateUrl: './moment-detail.component.html',
  styleUrls: ['./moment-detail.component.scss'],
})
export class MomentDetailComponent implements OnInit {
  momentDetail?: Moment;
  baseApiUrl: string = environment.baseApiUrl;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    this.getMomentById(id);
  }

  async getMomentById(id: number) {
    var response = await this.momentService.getMomentById(id);
    this.momentDetail = response.data;
  }
}
