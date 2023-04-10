import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { ILineup } from "../interfaces/ILineup";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LineUpService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getWeekLineUp({
    team,
    week = 28,
  }: {
    team: any;
    week: number;
  }): Observable<ILineup> {
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    const url = `${this.baseUrl}/teams/${team.id}/lineup/week/${week}`;
    return this.http.get<ILineup>(url, { headers });
  }
}
