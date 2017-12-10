import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Posts } from "../../models";

@Component({
  selector: "post-item",
  templateUrl: "./post-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent {
  @Input() post: Posts;
}
