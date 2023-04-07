import { Component, Input } from "@angular/core";

@Component({
  selector: "app-position",
  templateUrl: "./position.component.html",
  styleUrls: ["./position.component.scss"],
})
export class PositionComponent {
  @Input() players: any[] = [];

  constructor() {}
}
