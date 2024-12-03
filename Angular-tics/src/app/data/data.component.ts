import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
    selector: 'app-data',
    standalone: true,
    imports: [CommonModule, HttpClientModule], // Importa los módulos necesarios
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css'],
})
export class DataComponent {
    constructor(private dataService: DataService) {} // Inyección correcta

    ngOnInit(): void {
        this.dataService.getData().subscribe(data => console.log(data));
    }
}
