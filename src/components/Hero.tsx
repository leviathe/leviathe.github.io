function Hero() {
    return (
        <section className="hero bg-base-200">
            <div className="hero-content text-left">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold">Paul Pazart</h1>
                    <p className="py-6">
                        Étudiant AI – touche à tout
                    </p>
                    <div className="flex justify-left gap-2">
                        <span className="badge badge-primary">Etudiant</span>
                        <span className="badge badge-secondary">Python</span>
                        <span className="badge badge-accent">ML</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;