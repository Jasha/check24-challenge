import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BankService {
  private GET_BANKS_URL = '../assets/result.json';

  constructor(private http: HttpClient) { }

  public getBanks(): Observable<any> {
    return this.http.get(this.GET_BANKS_URL);
  }
}
