import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import templateString from "./index.component.html";
import { ProjectService } from "../project.service";
import { Project } from "../project.class";

@Component({
	template: templateString,
})
export class ProjectIndexComponent implements OnInit {
	projects: Project[];
	modalRef: BsModalRef;
	projectForm: FormGroup;
	isNew: Boolean;

	constructor(
		public fb: FormBuilder,
		private projectService: ProjectService,
		private modalService: BsModalService,
		private router: Router
	) {}

	public btnClick() {
		this.router.navigateByUrl("projects/add");
	}

	public newProject(template: TemplateRef<any>) {
		this.reset();
		this.modalRef = this.modalService.show(template);
	}

	public createProject() {
		this.projectService.create(this.projectForm.value).subscribe(() => {
			console.log("Project created!");
			this.reset();

			this.modalRef.hide();
		});
	}

	public editProject(project, template: TemplateRef<any>) {
		this.isNew = false;
		this.projectForm = this.fb.group({
			id: [project.id],
			project_id: [project.project_id],
			project_name: [project.project_name],
			region: [project.region],
		});

		this.modalRef = this.modalService.show(template);
	}

	public updateProject() {
		const { project_id } = this.projectForm.value;
		this.projectService.update(project_id, this.projectForm.value).subscribe(() => {
			console.log("Project updated!");
			this.reset();

			this.modalRef.hide();
		});
	}

	public deleteProject(project_id) {
		if (confirm("Are you sure?")) {
			this.projectService.delete(project_id).subscribe(() => {
				console.log("Project deleted!");
				this.reset();
			});
		}
	}

	ngOnInit() {
		this.reset();
	}

	public reset() {
		this.isNew = true;
		this.projectService.getProjects().subscribe((projects) => {
			this.projects = projects;
		});

		this.projectForm = this.fb.group({
			id: [""],
			project_id: [""],
			project_name: [""],
			region: [""],
		});
	}
}
