import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent {

  @Input() label = 'Label';
  @Input() value = '';
  @Input() isMandatory = true;
  @Input() placeholder = 'Placeholder';
  @Input() hintText = 'This is a hint text to help user';
  @Input() errorMessage = 'Error message';

  @Output() inputValueChanged = new EventEmitter<string>();

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    const result = `calix-${this.value}`;
    this.inputValueChanged.emit(result);
  }

}
