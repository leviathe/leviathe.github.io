import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
    {
        title: "Machine Learning & Deep Learning",
        skills: [
            { name: "PyTorch", level: 90 },
            { name: "TensorFlow", level: 85 },
            { name: "Scikit-Learn", level: 80 },
            { name: "Transformers (HuggingFace)", level: 85 },
        ]
    },
    {
        title: "Computer Vision",
        skills: [
            { name: "OpenCV", level: 95 },
            { name: "YOLO / Object Detection", level: 90 },
            { name: "Image Segmentation", level: 85 },
            { name: "TensorRT Optimization", level: 75 },
        ]
    },
    {
        title: "Languages & Outils",
        skills: [
            { name: "Python", level: 95 },
            { name: "C++", level: 70 },
            { name: "SQL", level: 85 },
            { name: "Docker & Kubernetes", level: 80 },
        ]
    }
]

const softSkills = ["Résolution de problèmes complexes", "Travail en équipe agile", "Communication technique", "Veille technologique", "Créativité"]

const styles = {
    container: "max-w-4xl mx-auto space-y-16",
    categoriesGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12",
    categoryContainer: "space-y-6",
    categoryTitle: "text-xl font-bold border-b border-border pb-2",
    skillList: "space-y-4",
    skillHeader: "flex justify-between items-center mb-1",
    skillName: "text-sm font-medium",
    skillLevel: "text-xs text-muted-foreground font-mono",
    progressBar: "h-2 bg-accent/20",
    softSkillsContainer: "mt-16 text-center space-y-6 bg-accent/5 p-8 rounded-3xl border border-white/5",
    softSkillsTitle: "text-2xl font-bold",
    softSkillsList: "flex flex-wrap justify-center gap-3",
    softSkillBadge: "px-4 py-2 bg-background border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default text-sm",
}

export function AppSkills() {
    return (
        <div className={styles.container}>
            <div className={styles.categoriesGrid}>
                {skillCategories.map((category, index) => (
                    <div key={index} className={styles.categoryContainer}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.skillList}>
                            {category.skills.map(skill => (
                                <div key={skill.name}>
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}%</span>
                                    </div>
                                    <Progress value={skill.level} className={styles.progressBar} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.softSkillsContainer}>
                <h3 className={styles.softSkillsTitle}>Soft Skills</h3>
                <div className={styles.softSkillsList}>
                    {softSkills.map(skill => (
                        <Badge key={skill} variant="outline" className={styles.softSkillBadge}>
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}
