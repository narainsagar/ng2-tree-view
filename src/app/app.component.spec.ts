import { TestBed } from "@angular/core/testing";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MockRouter } from "../../tests";

describe("AppComponent", () => {
  let appComponent: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        RouterTestingModule
      ],
      declarations: [AppComponent],
      providers: [
        { provide: Router, useClass: MockRouter }
      ]
    });
    appComponent = TestBed.createComponent(AppComponent).componentInstance;
  });

  it("`AppComponent` shoud present", () => {

  });
});