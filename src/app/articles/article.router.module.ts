import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { PostsComponent, PostDetailComponent } from "./containers";

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
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {}
