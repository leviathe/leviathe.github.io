function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer id="contact" className="footer footer-center bg-base-100 p-6">
            <aside>
                <p>© {year} Paul Pazart — <a className="link" href="mailto:toi@email.com">
                        contact.2gqfy@passmail.com
                    </a>
                </p>
            </aside>
        </footer>
    );
}

export default Footer;