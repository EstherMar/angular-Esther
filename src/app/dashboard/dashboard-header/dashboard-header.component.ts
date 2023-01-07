import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})

export class DashboardHeader{
  public mercadonaLogo: string;
  public mercadonaName: string;
  public loginButton: string;

  public constructor()
  {
    this.mercadonaLogo = '../../../assets/img/mercadona-logo.png';
    this.mercadonaName = 'Mercadona';
    this.loginButton = 'Iniciar sesión';
  }
}