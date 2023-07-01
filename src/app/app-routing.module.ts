import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "ranking",
    loadChildren: () =>
      import("./pages/ranking/ranking.module").then((m) => m.RankingModule),
  },
  {
    path: "market",
    loadChildren: () =>
      import("./pages/market/market.module").then((m) => m.MarketModule),
  },
  { path: 'happyBirthday', loadChildren: () => import('./pages/happy-birthday/happy-birthday.module').then(m => m.HappyBirthdayModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
