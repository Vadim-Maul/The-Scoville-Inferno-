import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '@app/account/store/actionTypes';
import { IRegisterRequest } from '@app/account/types/registerRequest.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<IRegisterRequest>(),
);
