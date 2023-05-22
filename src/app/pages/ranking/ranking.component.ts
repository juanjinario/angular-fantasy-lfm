import { Component } from "@angular/core";
import { RankingService } from "../../core/services/ranking.service";
import { UserService } from "../../core/services/user.service";
import { forkJoin } from "rxjs";
import { ILineup } from "src/app/core/interfaces/ILineup";
import { IPlayer } from "src/app/core/interfaces/IPlayer";
import { IPlayerFrequency } from "src/app/core/interfaces/IPlayerFrequency";
import { IFormation } from "src/app/core/interfaces/IFormation";
import { LineUpService } from "src/app/core/services/line-up.service";

@Component({
  selector: "app-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"],
})
export class RankingComponent {
  teamList: ILineup[] = [];
  myTeam!: ILineup;
  repeatedPlayers: { [position: string]: IPlayerFrequency[] } = {};

  constructor(
    private rankingService: RankingService,
    private userService: UserService,
    private lineUpService: LineUpService
  ) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    forkJoin({
      teams: this.rankingService.getLineUps({}),
      myTeam: this.lineUpService.getWeekLineUp({}),
    }).subscribe(({ teams, myTeam }) => {
      this.teamList = this.getRepeatedPlayersInRivals({ myTeam, teams });
      this.repeatedPlayers = this.getTopPlayersByPosition(teams);
      console.log(this.repeatedPlayers);
    });
  }

  getRepeatedPlayersInRivals({
    myTeam,
    teams,
  }: {
    myTeam: ILineup;
    teams: ILineup[];
  }): ILineup[] {
    teams.forEach((team) => {
      Object.keys(team.formation).forEach((position) => {
        team.formation[position as keyof IFormation].forEach(
          (player: IPlayer | number) => {
            if (player instanceof Object) {
              player.isRepeated = this.findPlayerInTeam({
                player,
                position,
                team: myTeam,
              });
            }
          }
        );
      });
    });
    return teams;
  }

  findPlayerInTeam({
    team,
    position,
    player,
  }: {
    team: ILineup;
    position: string;
    player: IPlayer;
  }): boolean {
    return team.formation[position as keyof IFormation].some(
      (teamPlayer: IPlayer | number) => {
        if (teamPlayer instanceof Object) {
          return teamPlayer.playerMaster.id === player.playerMaster.id;
        }
        return false;
      }
    );
  }

  getTopPlayersByPosition(teams: ILineup[]): {
    [position: string]: IPlayerFrequency[];
  } {
    const playerFrequencies: { [position: string]: IPlayerFrequency[] } = {};

    teams.forEach((team) => {
      Object.keys(team.formation).forEach((position) => {
        team.formation[position as keyof IFormation].forEach(
          (player: IPlayer | number) => {
            if (player instanceof Object) {
              const existingPlayer = playerFrequencies[position]?.find(
                (p) => p.player.playerMaster.id === player.playerMaster.id
              );

              if (existingPlayer) {
                existingPlayer.frequency++;
              } else {
                if (!playerFrequencies[position]) {
                  playerFrequencies[position] = [];
                }

                playerFrequencies[position].push({
                  player,
                  frequency: 1,
                });
              }
            }
          }
        );

        playerFrequencies[position]?.sort((a, b) => b.frequency - a.frequency);
      });
    });
    return playerFrequencies;
  }
}
