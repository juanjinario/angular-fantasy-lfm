import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { TokenInterceptor } from "./core/interceptors/token.interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./shared/layout/layout.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
