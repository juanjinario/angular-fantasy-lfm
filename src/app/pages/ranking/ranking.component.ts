import { Component } from "@angular/core";
import { RankingService } from "../../core/services/ranking.service";
import { UserService } from "../../core/services/user.service";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"],
})
export class RankingComponent {
  teamList: any[] = [];
  myTeam: any = {};

  constructor(
    private rankingService: RankingService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    forkJoin({
      teams: this.rankingService.getLineUps({}),
      myTeam: this.userService.getUserLineUp({}),
    }).subscribe(({ teams, myTeam }) => {
      this.teamList = teams;
      console.log(teams);
      console.log(myTeam);
    });
  }
}
