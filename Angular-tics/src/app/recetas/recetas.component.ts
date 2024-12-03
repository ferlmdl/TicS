import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  // Arreglo de recetas con ejemplo de imagen, nombre y descripción
  recetas = [
    { 
      nombre: 'Receta 1', 
      descripcion: 'Descripción de la receta 1', 
      imagen: 'https://via.placeholder.com/150'
    },
    { 
      nombre: 'Receta 2', 
      descripcion: 'Descripción de la receta 2', 
      imagen: 'https://via.placeholder.com/150'
    },
    { 
      nombre: 'Receta 3', 
      descripcion: 'Descripción de la receta 3', 
      imagen: 'https://via.placeholder.com/150'
    },
    { 
      nombre: 'Receta 4', 
      descripcion: 'Descripción de la receta 4', 
      imagen: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
