import { ErrorHandler, NgModule, Injector } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http, RequestOptions, XHRBackend } from "@angular/http";
import { Router } from "@angular/router";
import { routing } from "./app.routes";
import { AppComponent } from "./app.component";
import { TreeViewModule } from "./tree-view";
import { DemoModule } from "./demo-tree-view";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TreeViewModule,
    DemoModule
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }