import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobTitle } from '../Models/job-title.model';
import { AuthOService } from './auth-o.service';

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  constructor(private http: HttpClient, private authService: AuthOService) { }

  readonly APIUrl = "https://localhost:6001/api";
  accessToken = this.authService.accessToken;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.accessToken 
    })
  };

  getJobTitles(): Observable<JobTitle[]> {
    return this.http.get<JobTitle[]>(this.APIUrl + '/JobTitle', this.httpOptions);
  }

  getJobTitleById(id: number): Observable<JobTitle> {
    const url = `${this.APIUrl}/JobTitle/${id}`;
    return this.http.get<JobTitle>(url, this.httpOptions);
  }

  getJobTitleCount(id: number): Observable<number> {
    const url = `${this.APIUrl}/JobTitle/GetJobTitleCount/${id}`;
    return this.http.get<number>(url);
  }
}
