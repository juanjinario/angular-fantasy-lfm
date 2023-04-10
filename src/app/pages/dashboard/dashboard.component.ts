import { Component } from "@angular/core";
import { environment } from "src/environments/environment.development";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  token = "";

  constructor() {
    this.token = environment.token;
  }
}
