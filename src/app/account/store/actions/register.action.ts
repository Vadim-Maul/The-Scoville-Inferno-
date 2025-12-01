import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '@app/account/store/actionTypes';
import { IRegisterRequest } from '@app/account/types/registerRequest.interface';
import { ICurrentUser } from '@app/shared/types/currenrUser.interface';

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IRegisterRequest }>(),
);
export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ user: ICurrentUser }>(),
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE);
