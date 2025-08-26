import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle as faCircleRegular} from '@fortawesome/free-regular-svg-icons'
import {faCircle as faCircleSolid} from '@fortawesome/free-solid-svg-icons'

function Timeline() {
    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-2xl font-semibold mb-4">
                Expérience
            </h2>
            <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-start">
                        <strong>2021</strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleSolid} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong> Baccalauréat avec mention </strong> <br/>
                        Mathématique, physique-chimie, science de l'ingénieur <br/>
                        <br/>
                        <strong> EPITA </strong> <br/>
                        Entrée à l'École pour l'informatique et les techniques avancées
                    </div>
                    <hr className="bg-primary h-1" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-start">
                        <strong>
                            2022
                        </strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleSolid} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong>Semestre à San Francisco</strong><br/>
                        Semestre dans le cadre du cursus d'EPITA
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-start">
                        <strong>
                            2023-2024
                        </strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleSolid} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong>Assistant Salle Machine</strong><br/>
                        Cours et création de travaux pratiques C et Rust
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-start">
                        <strong>
                            2024
                        </strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleSolid} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong>Epibuddy</strong> <br/>
                        Assistant et guide des élèves internationnaux
                    </div>
                    <hr className="bg-primary" />
                </li>
                <li>
                    <hr className="bg-primary" />
                    <div className="timeline-start">
                        <strong>
                            2025
                        </strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleSolid} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong>Stage QA Engineer</strong> <br/>
                        Stage d'un semestre à Papernest
                    </div>
                    <hr/>
                </li>
                <li>
                    <hr/>
                    <div className="timeline-start">
                        <strong>
                            Prévision - 2026
                        </strong>
                    </div>
                    <div className="timeline-middle">
                        <FontAwesomeIcon icon={faCircleRegular} className="h-5 w-5 currentColor"/>
                    </div>
                    <div className="timeline-end timeline-box">
                        <strong>Stage dans une enterprise qui déchire 😉</strong> <br/>
                        <strong>Diplôme d'EPITA - SCIA</strong>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Timeline;