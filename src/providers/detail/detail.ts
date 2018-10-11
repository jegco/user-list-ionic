import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';
import { environment as ENV } from '../../enviroments/enviroment';

/*
  Generated class for the DetailProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailProvider {
  baseUrl = 'https://reqres.in/api/unknown';

  constructor(private http: HttpClient) {}

  getDetails() {
    return this.http
      .get<any>(`${ENV.BASE_URL}${ENV.DETAIL_EP}`)
      .pipe(map(details => details.data));
  }
}
