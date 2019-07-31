import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChainComponent } from './chain/chain.component';
import { ContractsService } from './contracts.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouterModule } from './app-router.module';
import { SensorsComponent } from './sensors/sensors.component';

@NgModule({
  declarations: [
    AppComponent,
    ChainComponent,
    DashboardComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule, AppRouterModule
  ],
  providers: [ContractsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
