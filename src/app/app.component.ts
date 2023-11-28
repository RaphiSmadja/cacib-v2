import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calix-design-system';
  
  handleInputValue(value: string): void {
    console.log('Valeur du champ de saisie :', value);
  }
}
