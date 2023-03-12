import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RankingService {
  private baseUrl = "/api/v3/ranking";

  constructor(private http: HttpClient) {}

  getRanking(): Observable<any> {
    const url = `${this.baseUrl}/global?x-lang=es`;
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.http.get(url, { headers });
  }
}
