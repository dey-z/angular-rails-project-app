import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import templateString from "./add.component.html";
import { ProjectService } from "../project.service";
import { Project } from "../project.class";

@Component({
	template: templateString,
})
export class ProjectAddComponent implements OnInit {
	projects: Project[];
	modalRef: BsModalRef;
	projectForm: FormGroup;
	isNew: Boolean;

	constructor(
		public fb: FormBuilder,
		private projectService: ProjectService,
		private modalService: BsModalService
	) {}

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
		const { id } = this.projectForm.value;
		this.projectService.update(id, this.projectForm.value).subscribe(() => {
			console.log("Project updated!");
			this.reset();

			this.modalRef.hide();
		});
	}

	public deleteProject(id) {
		if (confirm("Are you sure?")) {
			this.projectService.delete(id).subscribe(() => {
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
