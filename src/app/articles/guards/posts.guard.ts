import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, take, filter, switchMap, catchError } from "rxjs/operators";

import * as fromStore from "../store";

@Injectable()
export class PostsGuard implements CanActivate {
  constructor(private store: Store<fromStore.ArticleState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPostsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.GetPosts());
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
