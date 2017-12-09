import { Posts } from "../../models";
import {
  PostsAction,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL
} from "../actions";

export interface PostsState {
  entities: { [id: number]: Posts };
  loading: boolean;
  loaded: boolean;
}

export const initialState: PostsState = {
  entities: {},
  loading: false,
  loaded: false
};

export function reducer(state = initialState, action: PostsAction): PostsState {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: true
      };

    case GET_POSTS_SUCCESS:
      const posts = action.payload;

      const entities = posts.reduce(
        (entities: { [id: number]: Posts }, post: Posts) => {
          return {
            ...entities,
            [post.id]: post
          };
        },
        { ...state.entities }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    default:
      return { ...state };
  }
}

export const getPostsEntities = (state: PostsState) => state.entities;
export const getPostsLoading = (state: PostsState) => state.loading;
export const getPostsLoaded = (state: PostsState) => state.loaded;
