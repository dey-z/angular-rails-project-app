import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProjectIndexComponent } from "./project/index/index.component";

const appRoutes: Routes = [
	{ path: "projects", component: ProjectIndexComponent },
	{ path: "", redirectTo: "/projects", pathMatch: "full" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
