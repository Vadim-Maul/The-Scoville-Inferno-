import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { registerAction } from '@app/account/store/actions/register.action';
import { accountFeature } from '@app/account/store/reducers';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  store = inject(Store);
  registerForm!: FormGroup;
  isSubmitting = this.store.selectSignal(accountFeature.selectIsSubmitting);
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.store.dispatch(registerAction(this.registerForm.value));
    }
  }
}
