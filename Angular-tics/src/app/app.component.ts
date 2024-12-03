import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, BaseChartDirective, HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-tics';
  isLoggedIn = true;
  darkMode = false;
  registerForm: FormGroup;

  constructor(private renderer: Renderer2, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // Activando el modo oscuro al inicio
    document.body.classList.add('dark-mode');
  }

  toggleDarkMode() {
    // Cambiar el modo oscuro
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }

  login() {
    // Lógica de login
    this.isLoggedIn = true;
  }

  logout() {
    // Lógica de logout
    this.isLoggedIn = false;
  }
}
