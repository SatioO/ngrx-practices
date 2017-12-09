import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../../environments/environment";

// ngrx
import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { storeFreeze } from "ngrx-store-freeze";

import { AppComponent } from "./containers";
import { AppRouterModule } from "./app.router.module";

import { reducers, CustomSerializer } from "./store";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
