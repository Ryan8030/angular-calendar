import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {LayoutComponent} from "../layout/layout.component";
import {AsideComponent} from "../layout/components/aside/aside.component";
import {InlineSVGModule} from "ng-inline-svg-2";
import { CalendarComponent } from './calendar/calendar.component';
import {PipesModule} from "../core/pipes/pipes.module";
import { CalendarEventDetailsComponent } from './calendar/components/calendar-event-details/calendar-event-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    CalendarComponent,
    CalendarEventDetailsComponent
  ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        InlineSVGModule,
        PipesModule,
        FormsModule
    ]
})
export class LayoutModule { }
