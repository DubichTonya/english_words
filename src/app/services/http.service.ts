import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPageData(group:number, page:number){
    return this.http.get(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`).pipe(
      tap(item => console.log(item)),
      catchError((err) => {
        console.log(err);
        return of([])
      })
    )
  }
}
