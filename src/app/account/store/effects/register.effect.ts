import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '@app/account/store/actions/register.action';
import { AccountService } from '@app/account/services/account.service';
import { IRegisterResponse } from '@app/account/types/registerResponse.interface';

@Injectable()
export class RegisterEffect {
  actions$ = inject(Actions);
  accountService = inject(AccountService);
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.accountService.register(request).pipe(
          map((response: IRegisterResponse) => {
            return registerSuccessAction({
              user: response,
            });
          }),
          catchError(() => {
            return of(registerFailureAction());
          }),
        );
      }),
    ),
  );
}
