import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../Models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

baseUrl: string = environment.baseUrl; 


  constructor(
    private http: HttpClient
  ) { }

findAll(): Observable<Client[]>{

const url = `${this.baseUrl}/clients`;
return this.http.get<Client[]>(url);

}

findById(id: string): Observable<Client>{
  const url = `${this.baseUrl}/clients/${id}`;
  return this.http.get<Client>(url);
}

create(client: Client): Observable<Client>{

  const url = `${this.baseUrl}/clients`;
  return this.http.post<Client>(url,client);  

}

update(client: Client, id: string): Observable<Client>{
  const url = `${this.baseUrl}/clients/${id}`;
  return this.http.put<Client>(url, client);
}

delete(id: string): Observable<void>{
  const url = `${this.baseUrl}/clients/${id}`;
  return this.http.delete<void>(url);
}

}
