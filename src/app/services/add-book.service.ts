import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Book } from '../models/book';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddBookService {

  constructor(  private http: Http) { }

  sendBook(book: Book) {
    const url = 'http://localhost:8181/book/add';

    const headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(book), {headers: headers} );
  }

}
