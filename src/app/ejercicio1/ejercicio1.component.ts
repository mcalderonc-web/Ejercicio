import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TipoEjercicio } from '../TipoEjercicio';
import { UpperCasePipe } from '@angular/common';
import { ColeccionEjercicios } from '../Coleccion-Tipo-Ejercicios';



@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [UpperCasePipe, FormsModule ],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
    
    TipoNuevo = ColeccionEjercicios;
    }

