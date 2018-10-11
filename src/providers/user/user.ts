import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/User';
import { map } from 'rxjs/operators';
import { environment as ENV } from '../../enviroments/enviroment';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  constructor(public http: HttpClient) {}

  getUSers(): Observable<User[]> {
    return this.http
      .get<any>(`${ENV.BASE_URL}${ENV.USER_EP}`)
      .pipe(map(users => users.data));
  }
}
