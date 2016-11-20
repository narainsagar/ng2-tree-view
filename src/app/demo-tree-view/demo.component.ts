import { Component } from "@angular/core";
import { MockData } from "../../../tests";

/*
  #usage
*/

@Component({
  selector: "demo-app",
  template: `
    <tree-view (onNodeSelected)="selectedNode($event)" [nodes]="sampleNodes"></tree-view>
  `
})
export class DemoComponent {
  sampleNodes: any;
  constructor() {
    this.sampleNodes = MockData.nodes;
  }

  selectedNode(node): void {
    console.log("Demo Node", node);
  }
}