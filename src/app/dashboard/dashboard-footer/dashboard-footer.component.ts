import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss'],
})

export class DashboardFooter{

  public addButton: string;

  public constructor()
  {
    this.addButton = 'Añadir producto';
  }

}