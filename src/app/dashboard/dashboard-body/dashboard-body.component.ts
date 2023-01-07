import { Component, OnInit } from '@angular/core';
import { Tornillo } from './tornillo/service/tornillo';
import { TornilloService } from './tornillo/service/tornillo.service';

@Component({
  selector: 'dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss'],
})

export class DashboardBody implements OnInit{
  
  public binIconButton: string;
  public tornillos: Tornillo[] = [];
  public totalTornillos!: number;
  public cargando: boolean = false;

  public constructor(
    private tornilloService: TornilloService,
  )
  {
    this.binIconButton = '../../../assets/img/bin.png';
  }

  public ngOnInit(): void {
   this.loadTornillos();
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

  public removeTornillo(): void {
    console.log('remove Tornillo clicked');
  }
}