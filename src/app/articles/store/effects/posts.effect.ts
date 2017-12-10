import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
// services
import { PostsService } from "../../services";
// actions
import { GET_POSTS, GetPostsSuccess, GetPostsFail } from "../actions";
// rsjs
import { of } from "rxjs/observable/of";
import { switchMap, catchError, map } from "rxjs/operators";

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  loadPosts$ = this.actions$.ofType(GET_POSTS).pipe(
    switchMap(_ => {
      return this.postsService
        .getPosts()
        .pipe(
          map(posts => new GetPostsSuccess(posts)),
          catchError((error: any) => of(new GetPostsFail(error)))
        );
    })
  );
}
