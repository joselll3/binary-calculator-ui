import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,        
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  a = '';
  b = '';
  operator: 'add' | 'subtract' | 'multiply' | 'divide' | 'mod' = 'add';

  onSubmit() {
    console.log('Form submitted:', {
      firstNumber: this.a,
      secondNumber: this.b,
      operator: this.operator
    });
  }
}
