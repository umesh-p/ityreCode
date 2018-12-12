import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { DataService } from '../../services/data.service';
import { DecimalPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardData:any = {};

  showDashboardData:boolean = false;

  allCustomers:any = ["Mark" , "John" , "Sam" , "Paul"];
  manufacturers :any= ["Audi","BMW","Volkswagon"];
  models:any = ["A4","A6","A9","B1","B3","Polo","ameo"]
  tyreManufacturers:any = ["CEAT","Apollo","Continental","Goodyear"]

  durationOpt:any=["day","week","month","year"];
  trips:any=["individual","other"];

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  onShowDashboard(){
    console.log(this.dashboardData)
      this.showDashboardData = true;
  }


  //Line chart Data

  public lineChartData1:Array<any> = [
   {data: [4, 5.6, 9.1, 8.5, 5, 3, 1], label: 'Temp(Celcius) Vs Econmy Index'}
  ];
  public lineChartLabels1:Array<any> = ['10', '20', '30', '40', '50', '60', '70'];

  public lineChartData2:Array<any> = [
  {data: [0,1, 1.6,2.5,3.9, 4.1, 5.5, 9.4, 8, 7], label: 'Pressure(Bar) Vs Econmy Index'}
  ];
  public lineChartLabels2:Array<any> = [ '1', '2', '3', '4', '5', '6','7','8','9','10'];


  public lineChartData3:Array<any> = [
   {data: [4 , 5.6, 9.6, 8.5, 7, 8, 4], label: 'Temp(Celcius) Vs Efficiency Index'}
  ];
  public lineChartLabels3:Array<any> = ['10', '20', '30', '40', '50', '60', '70'];

  public lineChartData4:Array<any> = [
  {data: [0,1, 1.6,2.5,3.9, 4.1, 5.5, 9.4, 8, 7], label: 'Pressure(Bar) Vs Efficiency Index'}
  ];
  public lineChartLabels4:Array<any> = [ '1', '2', '3', '4', '5', '6','7','8','9','10'];



  public lineChartType:string = 'line';

  public lineChartColors:Array<any> = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];

 public chartClicked(e:any):void {
   console.log(e);
 }

 public chartHovered(e:any):void {
   console.log(e);
 }


}
