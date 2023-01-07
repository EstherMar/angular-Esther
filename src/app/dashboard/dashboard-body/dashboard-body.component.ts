import { Component, OnInit } from '@angular/core';
import { DashboardHeader } from '../dashboard-header/dashboard-header.component';
import { Tornillo } from './tornillo/service/tornillo';
import { TornilloService } from './tornillo/service/tornillo.service';

@Component({
  selector: 'dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss'],
})

export class DashboardBody implements OnInit{
  
  public binIconButton: string;
  public eyeIconButton: string;
  public tornillos: Tornillo[] = [];
  public totalTornillos!: number;
  public cargando: boolean = false;
  public showCount: boolean = true;
  public showLogin: boolean = false;

  public constructor(
    private tornilloService: TornilloService,
  )
  {
    this.binIconButton = '../../../assets/img/bin.png';
    this.eyeIconButton = '../../../assets/img/eye.png';
  }

  public ngOnInit(): void {
   this.loadTornillos();
  }

  public viewLogin(): void {
    this.showCount = false;
    this.showLogin = true;
  }

  public viewList(): void {
    this.showCount = false;
    this.showLogin = false;
  }

  public loadTornillos() {
    this.tornilloService.getTornillos().subscribe(res => {
      if (res != null && res != undefined) {
        this.tornillos = res;
        this.totalTornillos = this.tornillos.length;

        setTimeout(() => {
          this.cargando = false
        }, 2000)
      }
    })
  }

  public removeTornillo(tornillo: Tornillo): void {
    this.tornilloService.deleteTornillo(tornillo);
  }
}