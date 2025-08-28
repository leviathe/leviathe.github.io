function ProjectModal({project}) {
    if (!project) {
        return null
    }

    return (
        <dialog id={`modal_${project.id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">{project.description}</p>
                <div className="modal-action">
                    <form method="dialog">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Voir sur GitHub
                        </a>
                        <button className="btn">Fermer</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ProjectModal;