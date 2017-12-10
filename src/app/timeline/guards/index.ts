import { PostsGuard } from "./posts.guard";
import { HasPostGuard } from "./haspost.guard";

export const guards: any[] = [PostsGuard, HasPostGuard];

export * from "./posts.guard";
export * from "./haspost.guard";
