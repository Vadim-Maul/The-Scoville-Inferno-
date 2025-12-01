import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { map, Observable } from 'rxjs';

import { IRegisterRequest } from '@app/account/types/registerRequest.interface';
import { IRegisterResponse } from '@app/account/types/registerResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  httpClient = inject(HttpClient);

  register(data: IRegisterRequest): Observable<IRegisterResponse> {
    const url = environment.apiUrl + '/users';
    return this.httpClient.post<IRegisterResponse>(url, data).pipe(
      map((res: IRegisterResponse): IRegisterResponse => {
        return res;
      }),
    );
  }
}
