
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubBaseService {

  public httpCode : number
  public message : string

  constructor() { }
    // extract data from result JSON
    protected getCommonFields(res: Response) {
      let body = res.json()
      this.httpCode = body['code']
      this.message = body['message']
    }

  
    // Manipulate headers
    public createHeader(header: any) {
      let headers: HttpHeaders = new HttpHeaders()
      headers = headers.append('Cache-Control', 'no-cache')
      headers = headers.append('Content-Type', 'application/json')
      if (header) {
        for (var key in header) {
          let type = typeof (header[key])
          if (type !== 'string') {
            headers = headers.append(key, JSON.stringify(header[key]))
          } else {
            headers = headers.append(key, header[key])
          }
        }
      }
  
      let httpOptions = {
        headers: headers
      }
      return httpOptions
    }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = JSON.stringify(error)
    }
    return throwError(errorMessage);
  }

}
