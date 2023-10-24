import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  displayValue: string = '';

  addToDisplay(value: string) {
    this.displayValue += value.replace("*", "×").replace("/", "÷");
  }

  calculate() {
    try {
      this.displayValue = eval(this.displayValue.replace("×", "*").replace("÷", "/"));
    } catch (e) {
      this.displayValue = 'Erro';
    }
  }

  clear() {
    this.displayValue = '';
  }
}
