import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TreeViewComponent } from "./";
import { TreeViewService } from "./tree-view.service";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [TreeViewComponent],
  exports: [TreeViewComponent],
  providers: [TreeViewService]
})

export class TreeViewModule { }