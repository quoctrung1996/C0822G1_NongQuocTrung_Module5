import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import {FormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InfoComponent,
    AddComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
