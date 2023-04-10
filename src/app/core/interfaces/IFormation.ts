import { IPlayer } from "./IPlayer";

export interface IFormation {
  goalkeeper: IPlayer[];
  defender: IPlayer[];
  midfield: IPlayer[];
  striker: IPlayer[];
  tacticalFormation: number[];
}
