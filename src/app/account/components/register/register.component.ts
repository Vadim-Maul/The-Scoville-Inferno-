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
import { AccountService } from '@app/account/services/account.service';
import { IRegisterRequest } from '@app/account/types/registerRequest.interface';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  store = inject(Store);
  accountService = inject(AccountService);
  registerForm!: FormGroup;
  isSubmitting = this.store.selectSignal(accountFeature.selectIsSubmitting);
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.registerForm.value);
    const request: IRegisterRequest = this.registerForm.value;
    this.store.dispatch(registerAction({ request }));
  }
}
