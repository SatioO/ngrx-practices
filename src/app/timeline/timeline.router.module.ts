import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent, PostItemComponent } from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    canActivate: [fromGuards.PostsGuard],
    component: PostsComponent
  },

  {
    path: ":postId",
    canActivate: [fromGuards.HasPostGuard],
    component: PostItemComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TimelineRoutingModule {}
