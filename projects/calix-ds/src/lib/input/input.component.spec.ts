import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error when error is set', () => {
    component.errorMessage = 'Error';

    const div: HTMLElement = fixture.nativeElement.querySelector('.error-message');

    expect(div.textContent).toContain(`Error`);
  });


  it('should emit value when input has changed', () => {
    const spy = spyOn(component.inputValueChanged, "emit");

    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');


    inputElement.value = 'value';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalledWith(`calix-value`);
  });
});
