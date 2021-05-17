import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTitle } from '../Models/job-title.model';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:5001/api";

  getJobTitles(): Observable<JobTitle[]> {
    return this.http.get<JobTitle[]>(this.APIUrl + '/JobTitle');
  }

  getJobTitleCount(id: number): Observable<number> {
    const url = `${this.APIUrl}/JobTitle/GetJobTitleCount/${id}`;
    return this.http.get<number>(url);
  }
}
