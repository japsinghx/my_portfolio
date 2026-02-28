const Contact = () => {
    const contactLinks = [
        {
            name: "Email",
            url: "mailto:japsinghx@gmail.com",
        },
        {
            name: "GitHub",
            url: "https://github.com/japsinghx",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/japmanpreet-singh-06052322a/",
        }
    ];

    return (
        <section className="max-w-3xl px-12 py-24">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
                Contact
            </h2>

            <div className="flex flex-wrap gap-6">
                {contactLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    >
                        {link.name}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3" fill="#2997FF">
                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;
