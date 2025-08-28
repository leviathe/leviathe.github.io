import {projects} from "../data/projects";
import ProjectModal from "./ProjectModal";

function ScholarProjects() {
    return (
        <section className="container mx-auto px-4 pb-10">
            <h2 className="text-2xl font-semibold mb-4">Projets scolaires</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {
                    projects.map((projet) => (
                        <div key={projet.id} className="card bg-base-200 shadow">
                            <div className="card-body">
                                <h3 className="card-title">{projet.title}</h3>
                                <div className="card-actions justify-end">
                                    <button className="btn" onClick={() => (document.getElementById(`modal_${projet.id}`) as HTMLDialogElement).showModal()}>Voir +</button>
                                    <ProjectModal project={projet} />
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