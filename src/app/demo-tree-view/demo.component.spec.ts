import { TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DemoComponent } from "./demo.component";
import { TreeViewComponent, TreeViewService } from "../tree-view";
import { MockRouter } from "../../../tests";

describe("DemoComponent", () => {
  let demoComponent: DemoComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        RouterTestingModule
      ],
      declarations: [DemoComponent, TreeViewComponent],
      providers: [
        { provide: Router, useClass: MockRouter },
        TreeViewService
      ]
    });
    demoComponent = TestBed.createComponent(DemoComponent).componentInstance;
  });

  it("`DemoComponent` shoud have mock data", () => {
    expect(demoComponent.sampleNodes.length).toBeGreaterThan(0);
    expect(demoComponent.sampleIconsClasses.nodeWithChild.length).toBeGreaterThan(0);
  });
});