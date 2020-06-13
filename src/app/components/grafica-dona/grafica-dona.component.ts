import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [],
})
export class GraficaDonaComponent implements OnInit {
  @Input() dataGrafica: any;
  leyenda: string = '';

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';
  constructor() {}

  ngOnInit(): void {
    //console.log(this.dataGrafica);
    this.leyenda = this.dataGrafica.leyenda;
    this.doughnutChartLabels = this.dataGrafica.labels;
    this.doughnutChartData = this.dataGrafica.data;
    this.doughnutChartType = this.dataGrafica.type;
  }
}
