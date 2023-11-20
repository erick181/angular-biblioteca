import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceOrder } from '../Models/Service-order';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceOrderService {

  baseUrl: string = environment.baseUrl; 

  constructor(
    private http: HttpClient
  ) { }

findAll(): Observable<ServiceOrder[]>{

const url = `${this.baseUrl}/services-orders`;
return this.http.get<ServiceOrder[]>(url);

}

findById(id: string): Observable<ServiceOrder>{
  const url = `${this.baseUrl}/services-orders/${id}`;
  return this.http.get<ServiceOrder>(url);
}

create(serviceOrder: ServiceOrder): Observable<ServiceOrder>{

  const url = `${this.baseUrl}/services-orders`;
  return this.http.post<ServiceOrder>(url,serviceOrder);  

}

update(serviceOrder: ServiceOrder, id: string): Observable<ServiceOrder>{
  const url = `${this.baseUrl}/services-orders/${id}`;
  return this.http.put<ServiceOrder>(url, serviceOrder);
}

delete(id: string): Observable<void>{
  const url = `${this.baseUrl}/services-orders/${id}`;
  return this.http.delete<void>(url);
}
}
