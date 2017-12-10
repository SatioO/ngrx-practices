import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Posts } from "../../models";
import { ArticleState, getSelectedPost } from "../../store";

@Component({
  selector: "post-detail",
  templateUrl: "./post-detail.component.html"
})
export class PostDetailComponent implements OnInit {
  post$: Observable<Posts>;
  constructor(private store: Store<ArticleState>) {}

  ngOnInit() {
    this.post$ = this.store.select(getSelectedPost);
  }
}
