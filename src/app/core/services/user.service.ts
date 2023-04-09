import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = environment.apiUrl;
  private myTeamId = "8997839";

  constructor(private http: HttpClient) {}

  getUserLineUp({ myTeamId = "8997839" }): Observable<any> {
    const url = `${this.baseUrl}/teams/${myTeamId}/lineup?x-lang=es`;
    const headers = new HttpHeaders()
      .set("x-app", "Fantasy-web")
      .set("x-lang", "es");
    return this.http.get(url, { headers });
  }
}
