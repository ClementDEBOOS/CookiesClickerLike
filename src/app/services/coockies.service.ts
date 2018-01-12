import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Credentials } from '../user';

@Injectable()
export class CoockiesService {
  // URL to web API
  private userUrl = 'api/credentials';

  constructor(
    private http: HttpClient) {

  }

  getUsers(): Observable<Credentials[]> {
    console.log('BOO', this.http.get<Credentials[]>(this.userUrl));
    return this.http.get<Credentials[]>(this.userUrl);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
