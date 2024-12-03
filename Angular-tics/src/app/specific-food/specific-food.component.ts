import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specific-food',
  templateUrl: './specific-food.component.html',
  styleUrls: ['./specific-food.component.css']
})
export class SpecificFoodComponent implements OnInit {
  alimento: any;

  alimentos = [
    { id: 1, nombre: 'Plátano', imagen: 'assets/platano.jpg', descripcion: 'Fruta rica en potasio.', carbohidratos: 27 },
    { id: 2, nombre: 'Jamón', imagen: 'assets/jamon.jpg', descripcion: 'Proteína baja en carbohidratos.', carbohidratos: 1 },
    // Agregar más alimentos aquí
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.alimento = this.alimentos.find(al => al.id === id);
  }

  calcularInsulina(carbohidratos: number): number {
    // Fórmula para calcular las unidades de insulina (personalízala según sea necesario)
    return carbohidratos / 10;
  }

  volver() {
    this.router.navigate(['/food']);
  }
}
