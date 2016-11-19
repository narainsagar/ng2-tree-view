import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DemoComponent } from "./demo-tree-view/demo.component";

const routes: Routes = [
  { path: "", component: DemoComponent },
  { path: "**", redirectTo: "/" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
