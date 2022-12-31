import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {LayoutComponent} from "../layout/layout.component";
import {AsideComponent} from "../layout/components/aside/aside.component";
import {InlineSVGModule} from "ng-inline-svg-2";
import { CalendarComponent } from './calendar/calendar.component';
import {PipesModule} from "../core/pipes/pipes.module";


@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    InlineSVGModule,
    PipesModule
  ]
})
export class LayoutModule { }
