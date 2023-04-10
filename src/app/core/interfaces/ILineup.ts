import { IFormation } from "./IFormation";

export interface ILineup {
  formation: IFormation;
  points: number;
  initialPoints: number;
  teamSnapshotTookOn: string;
}
