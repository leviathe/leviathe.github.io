import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Reconnaissance de partie politique",
        description: "Développement d'un système de reconnaissance de partie politique à partir des tweets d'un utilisateur.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
        tags: ["TensorFlow", "Python", "Scikit-learn", "Hugging Face"],
        github: "https://github.com",
        demo: "",
    },
    {
        title: "Reconnaissance Faciale en Temps Réel",
        description: "Développement d'un système de reconnaissance faciale robuste aux occlusions utilizando ResNet-50 et face_recognition. Déploiement sur edge device (Jetson Nano) avec optimisation TensorRT.",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
        tags: ["PyTorch", "OpenCV", "TensorRT", "Python"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
    {
        title: "Pipeline MLOps pour Détection d'Anomalies",
        description: "Conception d'un pipeline complet de CI/CD pour des modèles de Machine Learning. Automatisation de l'entraînement, du test et du déploiement via MLflow et GitHub Actions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        tags: ["MLflow", "Docker", "GitHub Actions", "FastAPI"],
        github: "https://github.com",
        demo: "",
    },
    {
        title: "Agent IA Conversationnel Sécurisé",
        description: "Création d'un chatbot spécialisé sur des données d'entreprise via RAG (Retrieval-Augmented Generation). Implémentation de guardrails pour empêcher les hallucinations.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        tags: ["LangChain", "OpenAI API", "Pinecone", "React"],
        github: "https://github.com",
        demo: "https://demo.com",
    },
]

const styles = {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto",
    card: "bg-accent/5 border-white/5 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.1)] flex flex-col overflow-hidden group",
    imageContainer: "relative aspect-video overflow-hidden border-b border-white/5",
    image: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100",
    imageOverlay: "absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500",
    header: "pb-2",
    title: "text-xl font-bold line-clamp-2",
    description: "text-muted-foreground text-sm leading-relaxed",
    content: "flex-1",
    tagsContainer: "flex flex-wrap gap-2 mt-4",
    tag: "bg-primary/10 text-primary border-primary/20",
    footer: "border-t border-white/5 pt-4 flex gap-4",
    link: "text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium",
}

export function AppProjects() {
    return (
        <div className={styles.container}>
            {projects.map((project, index) => (
                <Card key={index} className={styles.card}>
                    <div className={styles.imageContainer}>
                        <img src={project.image} alt={project.title} className={styles.image} />
                        <div className={styles.imageOverlay} />
                    </div>
                    <CardHeader className={styles.header}>
                        <CardTitle className={styles.title}>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className={styles.content}>
                        <CardDescription className={styles.description}>
                            {project.description}
                        </CardDescription>
                        <div className={styles.tagsContainer}>
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="outline" className={styles.tag}>
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className={styles.footer}>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <Github className="size-4" />
                                Code
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <ExternalLink className="size-4" />
                                Démo
                            </a>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
