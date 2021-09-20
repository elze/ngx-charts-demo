import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss']
})
export class VerticalBarChartComponent implements OnInit {

  constructor() { }

  @Input() saleData!: Array<{name: string, value: number}>;
  ngOnInit(): void {
  }

}
