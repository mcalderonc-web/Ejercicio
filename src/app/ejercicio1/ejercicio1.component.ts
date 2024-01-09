import { Component } from '@angular/core';
import { TipoEjercicio } from '../TipoEjercicio';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
    
    Tipo1: TipoEjercicio={
      id: 1, 
      nombre: "Flexión"
    }
}
