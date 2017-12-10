import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromReducers from "./posts.reducer";

export interface ArticleState {
  posts: fromReducers.PostsState;
}

export const reducers: ActionReducerMap<ArticleState> = {
  posts: fromReducers.reducer
};

export const getArticleState = createFeatureSelector<ArticleState>("articles");
