import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot } from "@angular/router";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { tap, take, map, filter, switchMap, catchError } from "rxjs/operators";

import { Posts } from "../models";
import * as fromStore from "../store";

@Injectable()
export class HasPostGuard implements CanActivate {
  constructor(private store: Store<fromStore.ArticleState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => {
        const id = parseInt(route.params.postId, 10);
        return this.hasPost(id);
      })
    );
  }

  hasPost(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getPostsEntities)
      .pipe(
        map((entities: { [key: number]: Posts }) => !!entities[id]),
        take(1)
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
