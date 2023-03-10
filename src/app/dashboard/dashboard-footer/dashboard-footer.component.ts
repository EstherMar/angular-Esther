import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TornilloCreateComponent } from '../dashboard-body/tornillo/tornillo-create/tornillo-create.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dashboard-footer',
  templateUrl: './dashboard-footer.component.html',
  styleUrls: ['./dashboard-footer.component.scss'],
})

export class DashboardFooter{

  public addButton: string;

  public constructor(
    private readonly _dialog: MatDialog,
  )
  {
    this.addButton = 'Añadir producto';
  }

  public addTornillo(): void {
    this._dialog.open(TornilloCreateComponent);
  }
}