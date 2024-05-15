import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { retry,catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<Employee> {
    return this.http
      .get<Employee>(this.apiURL + '/employees')
      .pipe(retry(1), catchError(this.handleError));
  
  }
  createEmployee(employee:any):Observable<Employee>{
    return this.http.post<Employee>(this.apiURL+'/employees',JSON.stringify(employee),this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));
  }
  updateEmployee(id:any,employee:any):Observable<Employee>{
    return this.http.put<Employee>(this.apiURL+'/employees/'+id,JSON.stringify(employee),this.httpOptions)
    .pipe(retry(1),catchError(this.handleError));
  }
  deleteEmployee(id:any){
    return this.http.delete<Employee>(this.apiURL+'/employees/'+id, this.httpOptions)
    .pipe(retry(1),catchError(this.handleError))
  }
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
}
}
