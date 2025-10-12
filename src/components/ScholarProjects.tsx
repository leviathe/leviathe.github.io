import { useEffect, useState } from "react";
import yaml from "js-yaml"
import type {IProject} from "./IProject";
import ProjectModal from "./ProjectModal";

function getBadgeColor(name: string): string {
    switch (name.toLowerCase()) {
        case "react":
            return "badge-primary"; // bleu
        case "typescript":
            return "badge-info"; // cyan
        case "tailwind":
            return "badge-accent"; // rose
        case "node.js":
        case "node":
            return "badge-success"; // vert
        case "docker":
            return "badge-warning"; // jaune
        default:
            return "badge-neutral"; // gris par défaut
    }
}

async function loadProjects() : Promise<IProject[]> {
    const response = await fetch("/data/projects.yaml");
    const text = await response.text();
    const data = yaml.load(text) as {projects: IProject[]};
    return data.projects
}

function ScholarProjects() {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        loadProjects().then(setProjects).catch(console.error);
    }, []);
    return (
        <section className="container mx-auto px-4 pb-10">
            <h2 className="text-2xl font-semibold mb-4">Projets scolaires</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {
                    projects?.map((project) => (
                        <div key={project.id} className="card bg-base-200 shadow">
                            <div className="card-body">
                                <h3 className="card-title">{project.title}</h3>
                                <div className="card-actions justify-end">
                                    <button className="btn" onClick={() => (document.getElementById(`modal_${project.id}`) as HTMLDialogElement).showModal()}>Voir</button>
                                    <ProjectModal project={project} />
                                </div>
                                <div className="flex flex-wrap overflow-hidden gap-2">
                                    {
                                        project.tags.map(tag => (
                                            <div className={`badge ${getBadgeColor(tag)} badge-lg`}>
                                                {tag}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default ScholarProjects;