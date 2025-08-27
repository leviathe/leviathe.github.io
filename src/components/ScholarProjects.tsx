import {projects} from "../data/projects";

function ScholarProjects() {
    return (
        <section className="container mx-auto px-4 pb-10">
            <h2 className="text-2xl font-semibold mb-4">Projets scolaires</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {projects.map((projet) => (
                    <div key={projet.id} className="card bg-base-200 shadow">
                        <div className="card-body">
                            <h3 className="card-title">{projet.title}</h3>
                            <p>{projet.description}</p>
                            <div className="card-actions justify-end">
                                {/*<a href={projet.link} className="btn btn-outline btn-sm">Voir</a>*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ScholarProjects;