import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root', // Esto lo registra automáticamente en el inyector global
})
export class DataService {
    private apiUrl = 'http://localhost:4000/data';

    constructor(private http: HttpClient) {}

    getData(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
