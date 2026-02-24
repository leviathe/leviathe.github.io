import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        title: "Stage - Ingénieur IA",
        company: "Aubay - Lab'Innov",
        period: "2026 - Présent",
        description: "Conception et entraînement de modèles de pour prévenir le blanchissement des coraux.",
        skills: ["Python"],
    },
    {
        title: "Stage - Ingénieur QA",
        company: "Papernest",
        period: "2024 (6 mois)",
        description: "Mise en place de tests automatisés pour les applications web et mobiles. Participation à l'amélioration continue des processus de qualité.",
        skills: ["Playwright", "TypeScript", "Jira"],
    },
]

const styles = {
    container: "space-y-12 max-w-4xl mx-auto",
    item: "relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border",
    dot: "absolute left-[-4px] top-2 size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]",
    header: "mb-2",
    title: "text-xl font-bold text-foreground",
    company: "text-primary font-semibold text-sm",
    period: "text-xs text-muted-foreground ml-2 font-mono",
    description: "text-muted-foreground/80 leading-relaxed mb-4",
    skills: "flex flex-wrap gap-2",
    badge: "bg-accent/50 text-[10px] uppercase tracking-wider font-bold",
}

export function AppExperience() {
    return (
        <div className={styles.container}>
            {experiences.map((exp, index) => (
                <div key={index} className={styles.item}>
                    <div className={styles.dot} />
                    <div className={styles.header}>
                        <h3 className={styles.title}>{exp.title}</h3>
                        <div className="flex items-center mt-1">
                            <span className={styles.company}>{exp.company}</span>
                            <span className={styles.period}>{exp.period}</span>
                        </div>
                    </div>
                    <p className={styles.description}>{exp.description}</p>
                    <div className={styles.skills}>
                        {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className={styles.badge}>
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
