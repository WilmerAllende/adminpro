import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRouteModule } from './pages.routes';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficaDonaComponent,
    AccoutSettingsComponent,
    PromesasComponent,
    RxjsComponent,
  ],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  imports: [SharedModule, PagesRouteModule, FormsModule, ChartsModule],
})
export class PagesModule {}
