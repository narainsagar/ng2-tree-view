import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class TreeViewService {
  onNodeSelected: EventEmitter<Object> = new EventEmitter();
  constructor() { }
  emitNodeChanged(node) {
    this.onNodeSelected.emit(node);
  }
  getNodeEmitter() {
    return this.onNodeSelected;
  }
}