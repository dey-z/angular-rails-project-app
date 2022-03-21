import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Project } from "./project.class";

const baseUri: string = "/mib/ajax";

@Injectable({
	providedIn: "root",
})
export class ProjectService {
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json",
		}),
	};

	getProjects(): Observable<Project[]> {
		return this.http.get(baseUri + "/targets").pipe(
			map((projects: Project[]) =>
				projects.map((project) => {
					return new Project(project.id, project.project_id, project.project_name, project.region);
				})
			)
		);
	}

	create(project): Observable<Project> {
		return this.http.post<Project>(
			baseUri + "/targets",
			JSON.stringify(project),
			this.httpOptions
		);
	}

	update(id, project): Observable<Project> {
		return this.http.put<Project>(
			baseUri + "/targets/" + id,
			JSON.stringify(project),
			this.httpOptions
		);
	}

	delete(id) {
		return this.http.delete<Project>(baseUri + "/targets/" + id, this.httpOptions);
	}
}
