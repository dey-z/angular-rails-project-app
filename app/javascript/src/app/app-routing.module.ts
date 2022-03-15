import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { ProjectIndexComponent } from "./project/index/index.component";
import { ProjectAddComponent } from "./project/add/add.component";

const appRoutes: Routes = [
	{ path: "", redirectTo: "/projects", pathMatch: "full" },
	{ path: "projects", component: ProjectIndexComponent },
	{ path: "projects/add", component: ProjectAddComponent }
	
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
