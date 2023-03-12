import { Component } from "@angular/core";
import { RankingService } from "../../core/services/ranking.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"],
})
export class RankingComponent {
  ranking: any[] = [];

  constructor(private rankingService: RankingService) {}

  ngOnInit() {
    this.rankingService.getRanking().subscribe((data: any) => {
      console.log(data);
    });
  }
}
