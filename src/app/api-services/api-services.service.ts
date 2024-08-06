import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from  '@angular/common/http';

@Injectable()
export class ApiServicesService {

  baseUrl: string = "https://localhost:7230/api/";

  constructor(public http: HttpClient) {}

  // public handleError(error: any) {
  //   let errorContent = 'Application not connected to the service. Please check your Configuration or check your internet connection and try again.';
  //   if(error.status == 0){
  //     return throwError(() => errorContent);
  //   } else if(error.status = 400){
  //     return throwError(() => error.error.title)
  //   } 
    
  //   else if(error.status == 500){
  //     alert('Request failed. Try again');
  //   }
  //   else {
  //     return throwError(() => error.error.title || error.error.title)
  //   }
  // }
  


  Login(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}UserInformation/Login`, data)
      // .pipe(
      //   map((res: any) => res),
      //   catchError(this.handleError)
      // );
  }
  setUserCredential(user: any){
    localStorage.setItem('userInfo', JSON.stringify(user))
  }
  Create(data:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}UserInformation/CreateAccount`, data)
     
  }

}
