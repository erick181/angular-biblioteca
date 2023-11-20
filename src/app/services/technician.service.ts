import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from '../Models/Technician';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

findById(id: string): Observable<Technician>{

  const url = `${this.baseUrl}/technicians/${id}`;

    return this.http.get<Technician>(url);

}

  findAll(): Observable<Technician[]>{

    const url = `${this.baseUrl}/technicians`;

    return this.http.get<Technician[]>(url);

  }
  
  create(technician: Technician): Observable<Technician>{

    const url = `${this.baseUrl}/technicians`;

    return this.http.post<Technician>(url,technician);
  }

  update(technician: Technician, id: string): Observable<Technician>{

    const url = `${this.baseUrl}/technicians/${id}`;

    return this.http.put<Technician>(url,technician);
  }

  delete(id: string): Observable<void>{

    const url = `${this.baseUrl}/technicians/${id}`;

    return this.http.delete<void>(url);
  }
}
