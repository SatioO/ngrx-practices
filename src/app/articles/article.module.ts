import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// components
import * as fromComponents from "./components";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

// modules
import { ArticleRoutingModule } from "./article.router.module";

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("articles", reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [...fromContainers.containers],
  providers: [...fromServices.services, ...fromGuards.guards]
})
export class ArticleModule {}
