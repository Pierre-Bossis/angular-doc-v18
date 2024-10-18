import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { nameValidator } from './validators/name.validators';
import { emailValidator } from './validators/email.validators';
import { twoPasswordCheckValidator } from './validators/twoPasswordValidate.validators';

@Component({
  selector: 'app-demo15',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './demo15.component.html',
  styleUrl: './demo15.component.css'
})
export class Demo15Component {
  myForm!: FormGroup;

  constructor (private fb: FormBuilder) { }

  ngOnInit (): void {
    this.myForm = this.fb.group({
      name: ['', [nameValidator], []],
      email: ['', [emailValidator], []],
      password: ['', [], []],
      passwordVerify: ['', [], []],
    }, {
      validators: twoPasswordCheckValidator
    });
  }
}
