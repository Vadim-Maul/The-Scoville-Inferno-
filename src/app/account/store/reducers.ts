import { IAccountState } from '@app/account/types/accountState.interface';
import { createFeature, createReducer, on } from '@ngrx/store';
import { registerAction } from '@app/account/store/actions/register.action';

const initialState: IAccountState = {
  isSubmitting: false,
};
export const accountFeature = createFeature({
  name: 'account',
  reducer: createReducer(
    initialState,
    on(registerAction, (state) => ({
      ...state,
      isSubmitting: true,
    })),
  ),
});
