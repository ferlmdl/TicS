import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private router: Router) {}

  // Método para hacer login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('https://tu-api.com/api/login', { email, password })
      .pipe(map(response => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          this.authStatus.next(true);
        }
        return response;
      }));
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Verificar si el usuario está logeado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Observable de cambios en el estado de autenticación
  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}
