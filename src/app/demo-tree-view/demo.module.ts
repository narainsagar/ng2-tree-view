import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http, RequestOptions, XHRBackend } from "@angular/http";
import { TreeViewModule } from "../tree-view";
import { DemoComponent } from "./demo.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TreeViewModule
  ],
  declarations: [DemoComponent],
  providers: []
})

export class DemoModule { }