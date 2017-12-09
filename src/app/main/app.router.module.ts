import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  { path: "", pathMatch: "full", redirectTo: "timeline" },
  {
    path: "timeline",
    loadChildren: "../timeline/timeline.module#TimelineModule"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouterModule {}
