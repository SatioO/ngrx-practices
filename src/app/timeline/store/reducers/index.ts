import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromReducers from "./posts.reducer";

export interface TimelineState {
  posts: fromReducers.PostsState;
}

export const reducers: ActionReducerMap<TimelineState> = {
  posts: fromReducers.reducer
};

export const getTimelineState = createFeatureSelector<TimelineState>(
  "timeline"
);
