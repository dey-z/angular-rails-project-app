import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppBootstrapModule } from "./app-bootstrap.module";
import { ProjectIndexComponent } from "./project/index/index.component";

@NgModule({
	declarations: [AppComponent, ProjectIndexComponent],
	imports: [
		HttpClientModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppBootstrapModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
