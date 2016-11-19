import { Component } from "@angular/core";
import { MockData } from "../../tests";

@Component({
  selector: "demo-app",
  template: `
    <h1> Tree view demo </h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() { }
}