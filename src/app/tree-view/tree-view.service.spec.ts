import { Injector, EventEmitter } from "@angular/core";
import { TestBed, getTestBed, inject } from "@angular/core/testing";
import { TreeViewService } from "./tree-view.service";

describe("TreeViewService", () => {
  let service: TreeViewService;
  let injector: Injector;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [],
      providers: [TreeViewService]
    });
    injector = getTestBed();
    service = injector.get(TreeViewService);
  });

  it("should have `onNodeSelected` as event emitter", () => {
    expect(service.onNodeSelected instanceof EventEmitter).toBeTruthy();
  });

  it("getNodeEmitter() should return `EventEmitter` instance", () => {
    let i = service.getNodeEmitter();
    expect(i instanceof EventEmitter).toBeTruthy();
  });

  it("emitNodeChanged() should broadcast event", () => {
    let testData = { node : "somenode" };
    spyOn(service.onNodeSelected, "emit");
    service.emitNodeChanged(testData);
    expect(service.onNodeSelected.emit).toHaveBeenCalledWith(testData);
  });
});