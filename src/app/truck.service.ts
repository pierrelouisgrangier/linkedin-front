import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TruckService {
  url = 'http://localhost:8080/api/raph';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Truck>> {
    return this.http.get<Array<Truck>>(`${this.url}/all`);
  }

  create(truck: Truck): Observable<Truck> {
    return this.http.post<Truck>(`${this.url}`, truck);
  }

  update(truck: Truck): Observable<Truck> {
    return this.http.put<Truck>(`${this.url}`, truck);
  }

  delete(id: number): Observable<Boolean> {
    return this.http.delete<Boolean>(`${this.url}/${id}`);
  }
}

export interface Truck {
  id?: number;
  name?: string;
  brand?: string;
  wheelSteering?: {
    brand?: string;
    size?: string;
  };
}
