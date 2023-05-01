import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MomentFormComponent } from './moment-form.component';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MomentFormComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form tag', () => {
    let compiled = fixture.debugElement.nativeElement as HTMLElement;
    let formElement = compiled.querySelector('form');
    expect(formElement).not.toBeNull();
  });

  it('should not emit the submit form event if the form is invalid', () => {
    const mockFormGroup = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('Foo', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      fileName: new FormControl('', [Validators.required]),
    });

    component.form = mockFormGroup;

    spyOn(component.submitForm, 'emit');

    component.submit();
    expect(component.submitForm.emit).not.toHaveBeenCalled();
  });

  it('should emit the submit form event if the form valid', () => {
    const mockFormGroup = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('Foo', [Validators.required]),
      description: new FormControl('Bar', [Validators.required]),
      image: new FormControl(''),
      fileName: new FormControl('image.png', [Validators.required]),
    });

    component.form = mockFormGroup;

    spyOn(component.submitForm, 'emit');

    component.submit();
    expect(component.submitForm.emit).toHaveBeenCalled();
  });
});
