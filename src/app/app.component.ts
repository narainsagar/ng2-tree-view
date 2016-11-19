import { Component } from "@angular/core";
import { MockData } from "../../tests";

@Component({
  selector: "demo-app",
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  sampleNodes: any;
  constructor() {
    this.sampleNodes = MockData;
  }
}