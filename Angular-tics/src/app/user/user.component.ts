import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // Propiedades del usuario
  isLoggedIn = true;
  isEditing = false;
  username = 'Fernanda';
  gender = 'female';

  // Datos del usuario
  userData = {
    diabetesType: 'Tipo 1',
    foodItems: 'Arroz, 200g; Manzana, 150g',
    totalCarbs: 45
  };

  // Datos para los gráficos
  dailyCarbs = [45, 60, 50, 70, 40, 55, 65];  // Ejemplo de datos para la última semana
  weeklyCarbs = [350, 400, 380];  // Ejemplo de datos para las últimas tres semanas
  monthlyCarbs = [1500, 1600, 1550];  // Ejemplo de datos para los últimos tres meses

  // Configuración del gráfico
  public chartType: ChartType = 'line'; // Usamos un gráfico de líneas
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Hora del día' // O 'Semana' o 'Mes', dependiendo del gráfico
        }
      },
      y: {
        title: {
          display: true,
          text: 'Carbohidratos (g)'
        },
        beginAtZero: true
      }
    }
  };

  public chartLabels: string[] = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];  // Inicialmente, las horas del día
  public chartData: ChartDataset[] = [
    {
      data: this.dailyCarbs, // Inicialmente, los datos diarios
      label: 'Carbohidratos Consumidos (g)',
      borderColor: 'rgba(63, 81, 181, 1)',
      backgroundColor: 'rgba(63, 81, 181, 0.2)',
      fill: true
    }
  ];

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      diabetesType: [this.userData.diabetesType, Validators.required],
      foodItems: [this.userData.foodItems, Validators.required],
      totalCarbs: [this.userData.totalCarbs, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Podrías cargar datos desde una API o servicio
  }

  get welcomeMessage() {
    switch (this.gender) {
      case 'male':
        return 'Bienvenido';
      case 'female':
        return 'Bienvenida';
      case 'non-binary':
        return 'Bienvenide';
      default:
        return 'Bienvenid@';
    }
  }

  editProfile() {
    this.isEditing = true;
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.userData = { ...this.profileForm.value };
      this.isEditing = false;
    }
  }

  calculateInsulin() {
    const carbs = this.userData.totalCarbs;
    return (carbs / 10);
  }

  // Función para cambiar entre gráficos (diario, semanal, mensual)
  displayChart(chartType: string) {
    if (chartType === 'daily') {
      this.chartLabels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00']; // Horas del día
      this.chartData = [{
        data: this.dailyCarbs,
        label: 'Carbohidratos Consumidos (g)',
        borderColor: 'rgba(63, 81, 181, 1)',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true
      }];
    } else if (chartType === 'weekly') {
      this.chartLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']; // Días de la semana
      this.chartData = [{
        data: this.weeklyCarbs,
        label: 'Carbohidratos Consumidos (g)',
        borderColor: 'rgba(63, 81, 181, 1)',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true
      }];
    } else if (chartType === 'monthly') {
      this.chartLabels = ['Semana 1', 'Semana 2', 'Semana 3']; // Semanas del mes
      this.chartData = [{
        data: this.monthlyCarbs,
        label: 'Carbohidratos Consumidos (g)',
        borderColor: 'rgba(63, 81, 181, 1)',
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        fill: true
      }];
    }
  }
  addFood(){}
}
