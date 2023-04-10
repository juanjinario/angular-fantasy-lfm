import { IClub } from "./IClub";
import { ILastStat } from "./IStats";

export interface IPlayer {
  playerMaster: IPlayerMaster;
  buyoutClause: number;
  playerTeamId: string;
  isRepeated?: boolean;
}

export interface IPlayerMaster {
  points: number;
  lastStats: ILastStat[];
  averagePoints: number;
  images: IPlayerImages;
  id: string;
  team: IClub;
  name: string;
  lastSeasonPoints: number;
  nickname: string;
  birthDate: string;
  birthplace: string;
  positionId: number;
  position: string;
  height: number;
  marketValue: number;
  playerStatus: string;
}

export interface IPlayerImages {
  big: IPlayerImageFormats;
  beat: IPlayerImageFormats;
  transparent: IPlayerImageFormats;
}

export interface IPlayerImageFormats {
  "2048x2225": string;
  "1024x1113": string;
  "512x556": string;
  "256x278": string;
  "128x139": string;
  "64x70": string;
}
