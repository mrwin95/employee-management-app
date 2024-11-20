import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPiResponse } from '../helpers/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getDesignations(): Observable<IAPiResponse<[]>> {
    return this.http.get<IAPiResponse<[]>>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }
}
