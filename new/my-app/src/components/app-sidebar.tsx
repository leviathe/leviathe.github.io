import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    User,
    Briefcase,
    GraduationCap,
    FolderCode,
    Wrench,
    Mail,
    Github,
    Linkedin,
    Download
} from "lucide-react"

const navItems = [
    {
        title: "Profil",
        url: "#profile",
        icon: User,
    },
    {
        title: "Expériences",
        url: "#experience",
        icon: Briefcase,
    },
    {
        title: "Formation",
        url: "#education",
        icon: GraduationCap,
    },
    {
        title: "Projets",
        url: "#projects",
        icon: FolderCode,
    },
    {
        title: "Compétences",
        url: "#skills",
        icon: Wrench,
    },
    {
        title: "Contact",
        url: "#contact",
        icon: Mail,
    },
]

const socialItems = [
    {
        title: "GitHub",
        url: "https://github.com",
        icon: Github,
    },
    {
        title: "LinkedIn",
        url: "https://linkedin.com",
        icon: Linkedin,
    }
]

const styles = {
    headerCvButton: "group/cv-btn flex items-center group-data-[collapsible=icon]:justify-center gap-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all rounded-xl p-3 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:w-9 group-data-[collapsible=icon]:h-9 group-data-[collapsible=icon]:mx-auto shadow-sm active:scale-95 mx-2 my-2",
    headerCvIconWrapper: "bg-primary group-hover:bg-primary-foreground/20 text-primary-foreground p-1.5 rounded-lg transition-colors flex items-center justify-center shrink-0",
    headerCvIcon: "size-4",
    headerCvTextWrapper: "flex flex-col group-data-[collapsible=icon]:hidden",
    headerCvTitle: "text-sm font-bold leading-none mb-1",
    headerCvSubtitle: "text-[10px] uppercase tracking-wider opacity-80 leading-none",
    groupLabel: "group-data-[collapsible=icon]:hidden px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/50",
    menuButton: "transition-all hover:bg-accent hover:translate-x-1 active:scale-95",
    menuLink: "flex items-center gap-3",
    menuIcon: "size-4",
    menuText: "font-medium",
    socialButton: "hover:bg-accent transition-all",
    availabilityCard: "bg-gradient-to-br from-accent/80 to-accent/20 group/card relative overflow-hidden rounded-2xl border border-white/5 p-4 transition-all hover:shadow-2xl hover:border-white/10",
    availabilityHeader: "flex items-center gap-3 mb-2",
    availabilityDot: "size-2 rounded-full bg-green-500 animate-pulse",
    availabilityTitle: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground",
    availabilityText: "text-xs text-muted-foreground/80 leading-relaxed font-medium",
    availabilityGlow: "absolute -right-4 -bottom-4 size-16 bg-primary/5 blur-2xl transition-all group-hover:bg-primary/20"
}

export function AppSidebar() {
    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader className="border-b border-white/5 pb-2">
                <a href="/cv-test.txt" download="CV_Paul_Pazart_Test.txt" className={styles.headerCvButton}>
                    <div className={styles.headerCvIconWrapper}>
                        <Download className={styles.headerCvIcon} />
                    </div>
                    <div className={styles.headerCvTextWrapper}>
                        <span className={styles.headerCvTitle}>Télécharger CV</span>
                        <span className={styles.headerCvSubtitle}>Fichier de test</span>
                    </div>
                </a>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className={styles.groupLabel}>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title} className={styles.menuButton}>
                                        <a href={item.url} className={styles.menuLink}>
                                            <item.icon className={styles.menuIcon} />
                                            <span className={styles.menuText}>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-4">
                    <SidebarGroupLabel className={styles.groupLabel}>Réseaux</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {socialItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild tooltip={item.title} className={styles.socialButton}>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.menuLink}>
                                            <item.icon className={styles.menuIcon} />
                                            <span className={styles.menuText}>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <div className="p-4 group-data-[collapsible=icon]:hidden">
                    <div className={styles.availabilityCard}>
                        <div className={styles.availabilityHeader}>
                            <div className={styles.availabilityDot} />
                            <p className={styles.availabilityTitle}>Système en ligne</p>
                        </div>
                        <p className={styles.availabilityText}>Batterie : 100%</p>
                        <div className={styles.availabilityGlow} />
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    )
}
