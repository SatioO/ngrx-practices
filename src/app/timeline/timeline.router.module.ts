import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent, PostItemComponent } from "./containers";

// guards
import * as fromGuards from "./guards";

const ROUTES: Routes = [
  {
    path: "",
    component: PostsComponent,
    canActivate: [fromGuards.PostsGuard]
  },

  {
    path: ":postId",
    canActivate: [fromGuards.PostsGuard],
    component: PostItemComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class TimelineRoutingModule {}
