function Projects() {
    return (
        <section className="container mx-auto px-4 pb-10">
            <h2 className="text-2xl font-semibold mb-4">Projets</h2>
            <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card bg-base-200 shadow">
                        <div className="card-body">
                            <h3 className="card-title">Projet {i}</h3>
                            <p>Description courte du projet.</p>
                            <div className="card-actions justify-end">
                                <a className="btn btn-outline btn-sm">Voir</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;