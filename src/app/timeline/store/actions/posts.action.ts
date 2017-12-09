import { Action } from "@ngrx/store";
import { Posts } from "../../models";

export const GET_POSTS = "[Timeline] GET POSTS";
export const GET_POSTS_SUCCESS = "[Timeline] GET POSTS SUCCESS";
export const GET_POSTS_FAIL = "[Timeline] GET POSTS FAIL";

export class GetPosts implements Action {
  readonly type = GET_POSTS;
}

export class GetPostsFail implements Action {
  readonly type = GET_POSTS_FAIL;
  constructor(public payload: any) {}
}

export class GetPostsSuccess implements Action {
  readonly type = GET_POSTS_SUCCESS;
  constructor(public payload: Posts[]) {}
}

export type PostsAction = GetPosts | GetPostsFail | GetPostsSuccess;
