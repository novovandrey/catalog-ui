import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from "./app.component";
import {ListComponent} from "./list/list.component";
import {MatListModule} from "@angular/material/list";
import { SchemaGridComponent } from './schema-grid/schema-grid.component';
import {AgGridModule} from "ag-grid-angular";
import { DatasetGridComponent } from './dataset-grid/dataset-grid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { DatasetInfoComponent } from './dataset-info/dataset-info.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SchemaGridComponent,
    DatasetGridComponent,
    ErrorDialogComponent,
    DatasetInfoComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    AgGridModule,
    MatGridListModule,
    MatSidenavModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule
  ],
  //{provide: ErrorHandler, useClass: GlobalErrorHandler},
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
