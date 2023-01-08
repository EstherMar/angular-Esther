import { INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import listaTornillos from '../../../../../assets/json/tornillos.json';
import { DashboardBody } from '../../dashboard-body.component';
import { TornilloService } from '../service/tornillo.service';

@Component({
  selector: 'tornillo-create',
  templateUrl: './tornillo-create.component.html',
  styleUrls: ['./tornillo-create.component.scss'],
})

export class TornilloCreateComponent implements OnInit{
  public title: string;
  public submitButtonText: string;
  public candelButtonText: string;
  public totalTornillos!: number;
  public nextId: number = 0;
  public form!: UntypedFormGroup;

  public formGroup!: FormGroup;
  formatos: string[] = [
    'Caja',
    'Pack',
    'Unidad',
  ];

public constructor (
  private readonly _fb: UntypedFormBuilder,
  private tornilloService: TornilloService,
  private readonly _dialog: MatDialog,
  public router: Router,
  ) {
    this.title = 'Nuevo producto';
    this.submitButtonText ='Guardar';
    this.candelButtonText = 'Cancelar';
}

  public ngOnInit(): void {
    this.form = this._fb.group({
      id: 0,
      nombre: [''],
      precio: [0],
      formato: [''],
      marca: [''],
    })
  }

  public nombre(): UntypedFormControl {
    return this.form.get('nombre') as UntypedFormControl;
  }

  
  public precio(): UntypedFormControl {
    return this.form.get('precio') as UntypedFormControl;
  }

  
  public formato(): UntypedFormControl {
    return this.form.get('formato') as UntypedFormControl;
  }

  
  public marca(): UntypedFormControl {
    return this.form.get('marca') as UntypedFormControl;
  }

  public canSubmit(): boolean {
    return this.form.dirty && this.form.valid;
  }

  public saveTornillo(): void {
    console.log(listaTornillos);

    var newTornillo = {
      id: listaTornillos.length + 1,
      nombre: this.form.value.nombre,
      precio: this.form.value.precio,
      formato: this.form.value.formato,
      marca: this.form.value.marca,
    }

  this.tornilloService.agregarTornillo(newTornillo).subscribe();
    console.log('nuevo', newTornillo);
    this._dialog.closeAll();
  }

  public cancel(): void {
    this._dialog.closeAll();
  }
}