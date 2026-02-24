import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Globe } from "@/components/ui/globe"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AppExperience } from "@/components/app-experience"
import { AppFormation } from "@/components/app-formation"

import { AppProjects } from "@/components/app-projects"
import { AppSkills } from "@/components/app-skills"
import { AppContact } from "@/components/app-contact"

const styles = {
    header: "flex h-16 shrink-0 items-center gap-2 px-4 sticky top-0 z-20 backdrop-blur-md border-b border-white/5",
    main: "relative flex flex-1 flex-col overflow-hidden px-4 md:px-12",
    hero: "relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center px-4",
    heroBg: "pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent)] opacity-50",
    globeWrapper: "absolute inset-0 z-0 flex items-center justify-center opacity-30",
    contentWrapper: "z-10 animate-fade-in space-y-6 flex flex-col items-center",
    badge: "inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-4",
    title: "bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-7xl font-black tracking-tighter text-transparent sm:text-9xl drop-shadow-sm",
    description: "mx-auto max-w-[600px] text-lg text-muted-foreground/80 sm:text-xl font-medium leading-relaxed",
    actions: "flex items-center justify-center gap-4 pt-8",
    btnPrimary: "px-8 py-3 mx-auto rounded-full bg-primary text-primary-foreground font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25",
    btnSecondary: "px-8 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm font-bold transition-all hover:bg-accent active:scale-95",
    section: "py-24 border-t border-white/5",
    sectionTitle: "text-4xl font-bold mb-12 text-center",
}

export function App() {
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className={styles.header}>
                        <SidebarTrigger className="-ml-1" />
                    </header>
                    <main className={styles.main}>
                        {/* Hero Section */}
                        <section id="profile" className={styles.hero}>
                            <div className={styles.heroBg} />
                            <div className={styles.globeWrapper}>
                                <Globe />
                            </div>

                            <div className={styles.contentWrapper}>
                                <div className={styles.badge}>
                                    Bienvenue sur mon portfolio
                                </div>
                                <h1 className={styles.title}>
                                    Paul Pazart
                                </h1>
                                <p className={styles.description}>
                                    Ingénieur informatique <br className="hidden md:block" />
                                    spécialisé en <span className="text-foreground font-bold">machine learning</span> et <span className="text-foreground font-bold">computer vision</span>.
                                </p>
                                <div className={styles.actions}>
                                    <a href="#projects" className={styles.btnPrimary}>
                                        Voir mes projets
                                    </a>
                                    <a href="#contact" className={styles.btnSecondary}>
                                        Me contacter
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Experience Section */}
                        <section id="experience" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Expériences Professionnelles</h2>
                            <AppExperience />
                        </section>

                        {/* Formation Section */}
                        <section id="education" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Formation Académique</h2>
                            <AppFormation />
                        </section>

                        {/* Projects Section */}
                        <section id="projects" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Projets Récents</h2>
                            <AppProjects />
                        </section>

                        {/* Skills Section */}
                        <section id="skills" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Compétences Techniques</h2>
                            <AppSkills />
                        </section>

                        {/* Contact Section */}
                        <section id="contact" className={styles.section}>
                            <h2 className={styles.sectionTitle}>Contact</h2>
                            <AppContact />
                        </section>
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
}

export default App;