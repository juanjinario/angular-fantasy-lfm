import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment.development";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  token = "";

  constructor(private cookieService: CookieService) {
    this.token = environment.token;
  }
}
