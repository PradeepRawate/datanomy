
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorsComponent } from './sensors/sensors.component';

const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: DashboardComponent
  },
  {
    path: 'sensors',
    component: SensorsComponent,
    pathMatch: 'full'
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true, enableTracing: false });
