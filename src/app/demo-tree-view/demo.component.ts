import { Component } from "@angular/core";
import { MockData } from "../../../tests";

/*
  #usage
*/

@Component({
  selector: "demo-app",
  template: `
    <tree-view (onNodeSelected)="selectedNode($event)" [icons]="sampleIconsClasses" [nodes]="sampleNodes"></tree-view>
  `
})
export class DemoComponent {
  sampleNodes: any;
  sampleIconsClasses: any;
  constructor() {
    this.sampleNodes = MockData.nodes;
    this.sampleIconsClasses = {
        nodeWithChild: "fa fa-folder",
        selectedNodeWithChild: "fa fa-folder-open",
        nodeWithNoChild: "fa fa-file",
        selectedNodeWithNoChild: "fa fa-file"
      };
  }

  selectedNode(node): void {
    console.log("Demo Node", node);
  }
}