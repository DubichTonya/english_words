import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { of } from 'rxjs';
import { LoaderService } from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private loader: LoaderService) { }

  getPageData(group:number, page:number){
    this.loader.showLoader()
    return this.http.get(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`).pipe(
      tap(() => this.loader.hiddenLoader()),
      catchError((err) => {
        this.loader.hiddenLoader()
        console.log(err);
        return of([])
      })
    )
  }
}
