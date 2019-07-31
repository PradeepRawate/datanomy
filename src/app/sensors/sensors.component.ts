import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  sensors: any;
  selectedSensor: any;

  ngOnInit() {
    $('.sensorLoader').modal('show');
    setTimeout(() => {
      $('.sensorLoader').modal('hide');
      this.http.get('assets/sensors.json')
        .subscribe(res => this.sensors = res);
    }, 1500);
  }

  showModal(sensor: any) {
    this.selectedSensor = sensor;
    $('.purchaseDevice').modal('hide');
    $('.mdspLoader').modal('show');
    setTimeout(() => {
      $('.mdspLoader').modal('hide');
      $('.purchaseDevice').modal('show');
    }, 2000);
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }
}
