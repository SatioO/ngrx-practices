import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "articles" },
  {
    path: "articles",
    loadChildren: "../articles/article.module#ArticleModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouterModule {}
