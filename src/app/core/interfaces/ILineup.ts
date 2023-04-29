import { IFormation } from "./IFormation";
import { IManager } from "./IManager";

export interface ILineup {
  initialPoints: number;
  formation: IFormation;
  manager?: IManager;
  points: number;
  teamSnapshotTookOn: string;
}
