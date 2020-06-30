import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from '../shared/model/book';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public bookUrl = environment.apiUrl + '/books/';

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.alertService.error(`${operation} failed: ${error.alertService}`);
      return of(result as T);
    };
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl).pipe(map(res => {
      if (!res){
        throw new Error('Value expected!');
      }
      return  res;
    }),
      catchError(this.handleError<Book[]>('getBooks'))
    );
  }

  getBookDetail(url: string): Observable<Book> {
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>('getBookDetail'))
    );
  }


}
