import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // <-- Importa HttpClient

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule], // <-- Agregado
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a = '';
  b = '';
  operator: 'add' | 'subtract' | 'multiply' | 'divide' | 'mod' = 'add';
  result: string | null = null;  // para mostrar resultado
  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}  // <-- inyecta HttpClient

  onSubmit() {
    // Limpiar resultado previo
    this.result = null;
    this.errorMessage = null;

    const aNumber = Number(this.a);
    const bNumber = Number(this.b);

  if (isNaN(aNumber) || isNaN(bNumber)) {
    this.errorMessage = 'Both fields must be valid numbers';
    return;
  }


    // Preparamos el payload
    const payload = {
      a: aNumber,
      b: bNumber,
      operator: this.operator
    };

    // Llamada HTTP POST
    this.http.post<{ result: string }>('http://localhost:3000/calculate', payload)
      .subscribe({
        next: (res) => {
          this.result = res.result;
          console.log('result backend:', this.result);
        },
        error: (err) => {
          console.error('Error backend:', err);
          this.errorMessage = 'Calculation error. ' + (err?.error.error || 'Please try again later.') + '"';
        }
      });
  }
}