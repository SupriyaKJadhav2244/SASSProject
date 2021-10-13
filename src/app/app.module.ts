import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VariablesComponent } from './variables/variables.component';
import { NestingComponent } from './nesting/nesting.component';
import { MixinComponent } from './mixin/mixin.component';
import { OperatorsComponent } from './operators/operators.component';
import { MixingSecondComponent } from './mixing-second/mixing-second.component';
import { PartialsComponent } from './partials/partials.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    NestingComponent,
    MixinComponent,
    OperatorsComponent,
    MixingSecondComponent,
    PartialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
