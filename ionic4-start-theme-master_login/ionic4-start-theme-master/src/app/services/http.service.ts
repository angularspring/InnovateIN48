import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  authenticate(data:string): Observable<any> {
    return this.http.post(environment.AUTH_SERVICE, data,
       {headers: {"Content-Type": "application/x-www-form-urlencoded"},observe: 'response'});
    } 


}
