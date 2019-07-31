import { Component, OnInit, Input } from '@angular/core';
import { MAX_TEMP } from '../app.constant';
// import '../../assets/contract.js';

@Component({
  selector: 'app-chain',
  templateUrl: './chain.component.html',
  styleUrls: ['./chain.component.css']
})
export class ChainComponent implements OnInit {

  constructor() { }
  @Input() shipmentData;
  maxTemperature = MAX_TEMP;
  ngOnInit() {
    console.log('in chain: ', this.shipmentData);
    for (const key of Object.keys(this.shipmentData)) {
      const temp = this.shipmentData[key];
      this.shipmentData[key + 'humidity'] = this.getHumidity();
    }
    console.log(this.shipmentData);
  }

  getHumidity() {
    return Math.trunc(Math.random() * (60 - 50) + 50);
  }

  getShipmentStatus(temp) {
    return temp > this.maxTemperature ? 'error' : '';
  }
}
