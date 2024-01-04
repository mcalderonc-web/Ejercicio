import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

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
