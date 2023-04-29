import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MomentForm } from '@modules/moments/shared/interfaces/moment-form.interface';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss'],
})
export class MomentFormComponent implements OnInit {
  @Output() submitForm = new EventEmitter<MomentForm>();

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      fileName: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get fileName() {
    return this.form.get('fileName');
  }

  onChangeFile(event: Event) {
    const files = (event.target as HTMLInputElement)?.files as FileList;
    if (!files.length) {
      return this.form.patchValue({ image: '', fileName: '' });
    }

    const file = files.item(0);
    this.form.patchValue({ image: file, fileName: file!.name });
  }

  submit(): void {
    if (this.form.invalid) return;

    this.submitForm.emit(this.form.value);
  }
}
