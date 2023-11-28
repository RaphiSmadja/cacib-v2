import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'calix-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  @Input() label: string = 'Label';
  @Input() isMandatory: boolean = true;
  @Input() placeholder: string = 'Placeholder';
  @Input() hintText: string = 'This is a hint text to help user';

  @Output() inputValueChanged = new EventEmitter<string>();
  errorMessage!: string;
  onInputChange(event: Event): void {
    this.errorMessage = '';

    const value = (event.target as HTMLTextAreaElement).value;
    if (value.trim() === '' && this.isMandatory) {
      this.errorMessage = 'This field is required';
    } else {
      const result = `calix-${value}`;
      this.inputValueChanged.emit(result);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
