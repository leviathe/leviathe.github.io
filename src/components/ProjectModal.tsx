import type {IProject} from "./IProject"

type ProjectType = {
    project: IProject | null;
};

function ProjectModal({project}: ProjectType) {
    if (!project) {
        return null
    }
    return (
        <dialog id={`modal_${project.id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <p className="py-4">{project.description}</p>
                <div className="modal-action">
                    <form method="dialog">
                        {project.link && (<a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            GitHub
                        </a>)
                        }
                        <button className="btn">Fermer</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ProjectModal;