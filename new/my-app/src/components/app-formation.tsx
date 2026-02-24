import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const formations = [
    {
        degree: "Diplôme d'Ingénieur",
        specialization: "Intelligence Artificielle",
        school: "EPITA",
        year: "2021 - 2026",
        description: "Spécialisation en Vision par ordinateur.",
    },
]

const styles = {
    container: "grid gap-6 max-w-4xl mx-auto",
    card: "bg-accent/10 border-white/5 hover:bg-accent/20 transition-all hover:border-white/10 group",
    iconWrapper: "bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors",
    icon: "size-5 text-primary",
    header: "flex flex-row items-center gap-4 px-6 pt-6 space-y-0",
    year: "text-xs font-mono text-muted-foreground",
    school: "text-sm font-bold text-primary mb-1",
    specialization: "text-sm font-medium text-foreground/90",
    description: "text-xs text-muted-foreground/70 leading-relaxed mt-4 italic",
}

export function AppFormation() {
    return (
        <div className={styles.container}>
            {formations.map((form, index) => (
                <Card key={index} className={styles.card}>
                    <CardHeader className={styles.header}>
                        <div className={styles.iconWrapper}>
                            <GraduationCap className={styles.icon} />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-lg font-bold">{form.degree}</CardTitle>
                                <span className={styles.year}>{form.year}</span>
                            </div>
                            <div className={styles.school}>{form.school}</div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                        <div className={styles.specialization}>{form.specialization}</div>
                        <p className={styles.description}>"{form.description}"</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
