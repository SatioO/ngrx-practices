import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import { Posts } from "../../models";
import { TimelineState, getSelectedPost } from "../../store";

@Component({
  selector: "post-item",
  templateUrl: "./postItem.component.html"
})
export class PostItemComponent implements OnInit {
  post$: Observable<Posts>;
  constructor(private store: Store<TimelineState>) {}

  ngOnInit() {
    this.post$ = this.store.select(getSelectedPost);
  }
}
