import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, map, mergeMap, Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class RankingService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRanking(): Observable<any> {
    const url = `${this.baseUrl}/ranking/global?x-lang=es`;
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.http.get(url, { headers });
  }

  getLineUps({ total = 10, week = 28 }): Observable<any[]> {
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.getRanking().pipe(
      map((results: any) => results.slice(0, total)),
      mergeMap((slicedResults: any[]) => {
        const observables = slicedResults.map(({ team }) => {
          const url = `${this.baseUrl}/teams/${team.id}/lineup/week/${week}`;
          return this.http.get(url, { headers });
        });
        return forkJoin<any[]>(observables);
      })
    );
  }
}
