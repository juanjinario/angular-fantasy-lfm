import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, mergeMap, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RankingService {
  private baseUrl = "/api/v3";
  private week = 28;

  constructor(private http: HttpClient) {}

  getRanking(): Observable<any> {
    const url = `${this.baseUrl}/ranking/global?x-lang=es`;
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.http.get(url, { headers });
  }

  getTopTenTeams() {
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.getRanking().pipe(
      mergeMap((results) => {
        const topTenResults = results.slice(0, 20);
        const observables = topTenResults.map((result: any) => {
          const url = `${this.baseUrl}/teams/${result.team.id}/lineup/week/${this.week}`;
          return this.http.get(url, { headers });
        });
        return forkJoin(observables);
      })
    );
  }
}
