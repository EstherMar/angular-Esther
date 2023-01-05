import { Component } from '@angular/core';
import listaTornillos from '../../../assets/json/tornillos.json';

@Component({
  selector: 'dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss'],
})

export class DashboardBody{

  Tornillos: any = listaTornillos;

  public constructor()
  {}

}