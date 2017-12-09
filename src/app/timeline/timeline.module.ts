import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";

// containers
import * as fromContainers from "./containers";

// services
import * as fromServices from "./services";

// guards
import * as fromGuards from "./guards";

// modules
import { TimelineRoutingModule } from "./timeline.router.module";

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [...fromGuards.guards
    CommonModule,
    TimelineRoutingModule,
    HttpClientModule,
    StoreModule.forFeature("timeline", reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [...fromContainers.containers],
  providers: [...fromServices.services, ...fromGuards.guards]
})
export class TimelineModule {}
