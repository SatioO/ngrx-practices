import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Posts } from "../../models";
import { TimelineState, GetPosts, getAllPosts } from "../../store";

@Component({
  selector: "posts-list",
  templateUrl: "./posts.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit {
  posts$: Observable<Posts[]>;

  constructor(private store: Store<TimelineState>) {}

  ngOnInit() {
    this.posts$ = this.store.select(getAllPosts);
  }
}
