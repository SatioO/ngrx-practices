import { createSelector } from "@ngrx/store";
import * as fromReducers from "../reducers";
import * as fromPosts from "../reducers/posts.reducer";
import { getRouterState } from "../../../main/store";
import { Posts } from "../../models";

export const getPostsState = createSelector(
  fromReducers.getTimelineState,
  (state: fromReducers.TimelineState) => state.posts
);

export const getPostsEntities = createSelector(
  getPostsState,
  fromPosts.getPostsEntities
);

export const getSelectedPost = createSelector(
  getPostsEntities,
  getRouterState,
  (entities, router): Posts => {
    return router.state && entities[router.state.params.postId];
  }
);

export const getAllPosts = createSelector(getPostsEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getPostsLoading = createSelector(
  getPostsState,
  fromPosts.getPostsLoading
);
export const getPostsLoaded = createSelector(
  getPostsState,
  fromPosts.getPostsLoaded
);
