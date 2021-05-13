import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Office } from '../Models/office.model';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:5001/api";

  getOffices(): Observable<Office[]> {
    return this.http.get<Office[]>(this.APIUrl + '/Office');
  }

  getOfficeCount(id: number): Observable<number> {
    const url = `${this.APIUrl}/Office/GetOfficeCount/${id}`;
    return this.http.get<number>(url);
  }
}
