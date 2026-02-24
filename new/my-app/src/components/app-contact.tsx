import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Send } from "lucide-react"

const styles = {
    container: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto",
    infoCard: "bg-accent/5 border border-white/5 rounded-3xl p-8 space-y-8 flex flex-col justify-between",
    infoTitle: "text-2xl font-bold mb-4",
    infoText: "text-muted-foreground leading-relaxed",
    contactItem: "flex items-center gap-4 text-foreground hover:text-primary transition-colors cursor-pointer",
    iconWrapper: "bg-primary/10 p-3 rounded-full text-primary",
    icon: "size-5",
    formCard: "bg-background border border-white/5 shadow-2xl rounded-3xl p-8 space-y-6",
    formTitle: "text-2xl font-bold text-center mb-6",
    inputGroup: "space-y-2",
    label: "text-sm font-medium text-foreground ml-1",
    input: "bg-accent/5 border-white/10 focus-visible:ring-primary/50 text-foreground transition-all duration-300",
    textarea: "min-h-[150px] resize-none",
    submitButton: "w-full rounded-xl py-6 font-bold text-lg gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all",
}

export function AppContact() {
    // Fonction d'obfuscation de l'email : cache votre mail aux robots de scraping HTML
    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const user = "paul.pazart";
        const domain = "proton.me";
        window.location.href = `mailto:${user}@${domain}`;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject") || "Contact depuis le Portfolio";
        const message = formData.get("message");

        const user = "paul.pazart";
        const domain = "proton.me";

        const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        // Ouvre le client mail par défaut (Outlook, Mail, etc.) avec les champs pré-remplis
        window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className={styles.container}>
            {/* Informations de contact */}
            <div className={styles.infoCard}>
                <div>
                    <h3 className={styles.infoTitle}>Travaillons ensemble !</h3>
                    <p className={styles.infoText}>
                        Je suis actuellement à l'écoute de nouvelles opportunités (CDI, missions freelance) dans le domaine de l'Intelligence Artificielle et de la Computer Vision.
                        <br /><br />
                        N'hésitez pas à me contacter pour discuter de vos projets, je vous répondrai dans les plus brefs délais.
                    </p>
                </div>

                <div className="space-y-6 pt-8 border-t border-white/5 mt-8">
                    {/* Lien protégé contre les bots (onclick au lieu de href="mailto:") */}
                    <a onClick={handleEmailClick} className={styles.contactItem}>
                        <div className={styles.iconWrapper}>
                            <Mail className={styles.icon} />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                            <p className="font-semibold text-lg">[EMAIL_ADDRESS]</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Formulaire (Connecté via 'mailto:' dynamique sans service tiers) */}
            <form
                className={styles.formCard}
                onSubmit={handleSubmit}
            >
                <h3 className={styles.formTitle}>Envoyez-moi un message</h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Nom complet</label>
                        <Input name="name" placeholder="John Doe" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Adresse Email</label>
                        <Input type="email" name="email" placeholder="john@example.com" className={styles.input} required />
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Sujet</label>
                    <Input name="subject" placeholder="Proposition de collaboration..." className={styles.input} required />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Message</label>
                    <Textarea
                        name="message"
                        placeholder="Parlez-moi de votre projet..."
                        className={`${styles.input} ${styles.textarea}`}
                        required
                    />
                </div>

                <Button type="submit" className={styles.submitButton}>
                    <Send className="size-4" />
                    Envoyer le message
                </Button>
            </form>
        </div>
    )
}
