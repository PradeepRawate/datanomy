import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Shipment } from './shipment.model';
import { MAX_TEMP, SECRET } from '../app.constant';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _http: Http, private router: Router) {
    // this.getTimeSeries();
    // this.timer = setInterval(() => this.getTimeSeries(), 2000);
  }

  ngOnInit() {
  }

  navigateToSensors() {
    this.router.navigate(['sensors']);
  }
}
