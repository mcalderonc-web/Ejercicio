import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';


export class FormsModule {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,Ejercicio1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  })
export class AppComponent {
  titulo = 'Ejercicio de Angular';
}
