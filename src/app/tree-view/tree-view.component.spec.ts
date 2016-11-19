import { Injector, EventEmitter } from "@angular/core";
import { TestBed, getTestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { TreeViewComponent } from "./tree-view.component";
import { TreeViewService } from "./tree-view.service";
import { MockRouter, MockData } from "../../../tests";

describe("TreeViewComponent", () => {
  let treeViewComponent: TreeViewComponent;
  let service: TreeViewService;
  let injector: Injector;
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
    injector = getTestBed();
    service = injector.get(TreeViewService);
    treeViewComponent = TestBed.createComponent(TreeViewComponent).componentInstance;
    treeViewComponent.nodes = MockData.nodes;
  });

  it("`TreeViewComponent` get proper inputs", () => {
    treeViewComponent.ngOnInit();
    expect(treeViewComponent.nodes.length).toBeGreaterThan(0);
    expect(treeViewComponent.amIChild).toBeDefined();
    expect(treeViewComponent.customClass.length).toBeGreaterThan(0);
  });

  it("should boradcast node on selected", () => {
    let data = {};
    treeViewComponent.ngOnInit();
    spyOn(treeViewComponent.onNodeSelected, "emit");
    treeViewComponent.selNode(data);
    expect(treeViewComponent.onNodeSelected.emit).toHaveBeenCalledWith(data);
  });

  it("should append id and toggle attribude on init", () => {
    let data = [{}];
    treeViewComponent.amIChild = false;
    treeViewComponent.nodes = data;
    treeViewComponent.ngOnInit();
    expect(treeViewComponent.nodes[0].id).toBeDefined();
    expect(treeViewComponent.nodes[0].toggled).toBeDefined();
    expect(treeViewComponent.nodeCounter).toBeGreaterThan(1);
  });

  it("`selectNode()` should broadcast to parent and other components", () => {
    let data = { node : "somedata" };
    treeViewComponent.ngOnInit();
    spyOn(service, "emitNodeChanged");
    spyOn(treeViewComponent.onNodeSelected, "emit");
    treeViewComponent.selectNode(data);
    expect(service.emitNodeChanged).toHaveBeenCalledWith(data);
    expect(treeViewComponent.onNodeSelected.emit).toHaveBeenCalledWith(data);
  });
});