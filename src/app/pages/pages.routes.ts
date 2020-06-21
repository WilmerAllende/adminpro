import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { titulo: 'Dashboard' },
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { titulo: 'Progress' },
      },
      {
        path: 'graficas1',
        component: Graficas1Component,
        data: { titulo: 'Graficas' },
      },
      {
        path: 'promesas',
        component: PromesasComponent,
        data: { titulo: 'Promesas' },
      },
      {
        path: 'account-settings',
        component: AccoutSettingsComponent,
        data: { titulo: 'Ajuste del tema' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' } },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ],
  },
];

// export const PagesRouteModule = RouterModule.forChild(PAGES_ROUTES);

@NgModule({
  imports: [RouterModule.forChild(PAGES_ROUTES)],
  exports: [RouterModule],
})
export class PagesRouteModule {}
