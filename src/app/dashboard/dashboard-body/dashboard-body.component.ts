import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
  public dataSource:any;
  public form!: UntypedFormGroup;
  public totalTornillos!: number;
  public cargando: boolean = false;
  public showCount: boolean = true;
  public showLogin: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

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

    for (let x = 1; x <= 100; x++)
    this.dataSource = new MatTableDataSource<Tornillo>(this.tornillos);
    this.dataSource.paginator = this.paginator;
  }

  public removeTornillo(tornillo: Tornillo): void {
    this.tornilloService.deleteTornillo(tornillo);
  }
}