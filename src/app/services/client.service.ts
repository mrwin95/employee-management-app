import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { IAPiResponse } from '../helpers/api-response';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<IAPiResponse<Client>> {
    return this.http.get<IAPiResponse<Client>>(
      environment.API_URL + 'GetAllDesignationGetAllDesignation'
    );
  }

  addUpdate(obj: Client): Observable<IAPiResponse<Client>> {
    return this.http.post<IAPiResponse<Client>>(
      environment.API_URL + '/AddUpdateClient',
      obj
    );
  }

  deleteClientById(clientId: number): Observable<IAPiResponse<Client>> {
    return this.http.delete<IAPiResponse<Client>>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + clientId
    );
  }
}
