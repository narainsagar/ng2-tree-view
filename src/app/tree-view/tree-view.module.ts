import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http, RequestOptions, XHRBackend } from "@angular/http";
import { TreeViewComponent } from "./";
import { TreeViewService } from "./tree-view.service";
import { DemoComponent } from "../demo-tree-view/demo.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [TreeViewComponent, DemoComponent],
  providers: [TreeViewService]
})

export class TreeViewModule { }