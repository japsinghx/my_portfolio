const Experience = () => {
    const workExperience = [
        {
            date: "2024 — Now",
            title: "Software Engineer - Platform Operations & Engineering",
            company: "Charles Schwab",
            link: "https://www.schwab.com",
            type: "Austin, Texas • Full-time",
            description: [
                "Owned end-to-end full-stack development on a critical internal platform team using Spring Boot (backend) and React.js (frontend)",
                "Delivered scalable features that empowered engineering and operations teams to manage resources efficiently",
                "Introduced and automated secure authentication workflows, streamlining access to production-critical resources.",
                "Drove rapid delivery and high-quality code by adopting AI-powered development workflows using LLM tools such as Claude and ChatGPT."
            ]
        },
        {
            date: "2023 — Now",
            title: "Software Development Consultant",
            company: "FDM Group",
            link: "https://www.fdmgroup.com",
            type: "Remote • Full-time"
        },
        {
            date: "2021 — 2023",
            title: "Product Owner",
            company: "Doaba",
            link: "https://www.doaba.us",
            type: "Santa Barbara, California • Owner",
            description: [
                "Launched and scaled an e-commerce clothing brand, owning product strategy/R&D (Shopify, JavaScript, Adobe Illustrator) to drive 20% sales growth between releases and 15% margin improvement via supplier negotiations.",
                "Built strong brand and retention programs (85% repeat customer rate) through strategic campaigns and cross-functional coordination (design, operations, suppliers)."
            ]
        },
        {
            date: "2020 — 2023",
            title: "B.A. in Mathematics",
            company: "University of California, Santa Barbara",
            link: "https://www.ucsb.edu",
            type: "Santa Barbara, California",
            description: [
                "Focused on advanced mathematical foundations and analytical thinking",
                "Developed strong quantitative and logical reasoning abilities"
            ]
        }
    ];

    return (
        <section className="max-w-3xl px-12 py-4" id="experience">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
                Work Experience
            </h2>

            <div className="space-y-8">
                {workExperience.map((item, index) => (
                    <div key={index} className="grid grid-cols-[200px_1fr] gap-8 items-start">
                        {/* Date */}
                        <div className="text-gray-400 dark:text-gray-500 text-sm pt-1">
                            {item.date}
                        </div>

                        {/* Content */}
                        <div>
                            <div className="mb-1">
                                <a 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                >
                                    <span className="font-normal">{item.title} at <span style={{ whiteSpace: 'nowrap' }}>{item.company}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3 inline-block ml-0.5" style={{ verticalAlign: 'super' }} fill="#2997FF">
                                        <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                    </svg></span></span>
                                </a>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                                {item.type}
                            </p>
                            {item.description && (
                                <ul className="space-y-1.5">
                                    {item.description.map((bullet, i) => (
                                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex gap-2 items-start">
                                            <span className="text-gray-400 dark:text-gray-500">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
