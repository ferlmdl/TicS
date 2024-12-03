import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  alimentos = [
    { id: 1, nombre: 'Plátano', imagen: 'assets/platano.jpg', descripcion: 'Fruta rica en potasio.', carbohidratos: 27 },
    { id: 2, nombre: 'Jamón', imagen: 'assets/jamon.jpg', descripcion: 'Proteína baja en carbohidratos.', carbohidratos: 1 },
    // Agregar más alimentos aquí
  ];

  constructor(private router: Router) {}

  verDetalle(id: number) {
    this.router.navigate(['/specific-food', id]);
  }

  agregarAlimento() {
    alert('Función para agregar alimento en construcción');
  }
}
