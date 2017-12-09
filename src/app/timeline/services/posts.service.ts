import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { catchError } from "rxjs/operators";

import { Posts } from "../models";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Posts[]> {
    return this.http
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
