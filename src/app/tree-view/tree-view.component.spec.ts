import { TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TreeViewComponent } from "./tree-view.component";
import { TreeViewService } from "./tree-view.service";
import { MockRouter } from "../../../tests";

describe("AppComponent", () => {
  let treeViewComponent: TreeViewComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule
      ],
      declarations: [TreeViewComponent],
      providers: [
        { provide: Router, useClass: MockRouter },
        TreeViewService
      ]
    });
    treeViewComponent = TestBed.createComponent(TreeViewComponent).componentInstance;
  });

  it("`TreeViewComponent` shoud present", () => {

  });
});