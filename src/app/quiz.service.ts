import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseURL="http://localhost:8080/api";


  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL+'/categories');
  }

  createCategory(data: any): Observable<any> {
    return this.http.post<any>(this.baseURL+'/categories', data);
  }

  editCategory(data: any): Observable<any> {
    return this.http.put<any>(this.baseURL+'/categories', data);
  }

  getCategory(id: any): Observable<any> {
    return this.http.get<any>(this.baseURL+'/categories/' + id);
  }

}
