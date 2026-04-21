import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            date: "2026",
            title: "Flashback",
            description: [
                "Built an instant-camera iOS app that lets users digitally print their photos as film",
                "Photos are stored entirely on-device — no accounts, no cloud, no third-party SDKs.",
                "Designed around privacy-first principles: camera, location (city name only), and photo library access are used locally and never transmitted."
            ],
            technologies: ["Swift", "SwiftData", "iOS Engineering", "SwiftUI"],
            links: [
                { label: "Privacy Policy", url: "/flashback/privacy" }
            ]
        },
        {
            date: "2026",
            title: "Breeze",
            description: [
                "Independently scoped, built, and deployed a scalable health application serving up to 4 million locations — making every product, architecture, and reliability decision solo, from API integration design to cloud configurations through Google Cloud Platform and Vercel.",
                "Iterated rapidly — validating changes before release, monitoring system behavior in production, and prioritizing improvements based on actual impact rather than assumptions."
            ],
            technologies: ["JavaScript", "Node.js", "Swift", "Google Cloud Platform", "GitHub",
                "Vercel", "CI/CD", "iOS Engineering"
            ],
            links: [
                { label: "Website", url: "https://www.breeze.earth/" },
                { label: "Download iOS App", url: "https://apps.apple.com/us/app/breeze-aqi-and-allergies/id6757069490" },
                { label: "Documentation", url: "https://japsinghx-breeze-ios-25-65.mintlify.app/" }
            ]
        }
    ];

    return (
        <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24" id="projects">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-12">
                Projects
            </h2>

            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 items-start">
                        {/* Date */}
                        <div className="text-gray-400 dark:text-gray-500 text-sm pt-1">
                            {project.date}
                        </div>

                        {/* Content */}
                        <div>
                            <div className="mb-1">
                                {project.links ? (
                                    <div className="inline">
                                        <span className="font-normal text-gray-900 dark:text-gray-100">{project.title}</span>
                                        <span className="ml-2 inline-flex gap-2">
                                            {project.links.map((link, i) => (
                                                link.url.startsWith("/") ? (
                                                    <Link
                                                        key={i}
                                                        to={link.url}
                                                        className="text-[#2997FF] hover:text-[#147CE5] transition-colors text-sm inline-flex items-center gap-0.5"
                                                    >
                                                        {link.label}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3" style={{ verticalAlign: 'super' }} fill="currentColor">
                                                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                                        </svg>
                                                    </Link>
                                                ) : (
                                                    <a
                                                        key={i}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#2997FF] hover:text-[#147CE5] transition-colors text-sm inline-flex items-center gap-0.5"
                                                    >
                                                        {link.label}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3" style={{ verticalAlign: 'super' }} fill="currentColor">
                                                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                                        </svg>
                                                    </a>
                                                )
                                            ))}
                                        </span>
                                    </div>
                                ) : (
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                                    >
                                        <span className="font-normal">{project.title}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-3 h-3 inline-block ml-0.5" style={{ verticalAlign: 'super' }} fill="#2997FF">
                                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                        </svg></span>
                                    </a>
                                )}
                            </div>
                            
                            {/* Description */}
                            {project.description && (
                                <ul className="space-y-1.5 mb-3">
                                    {project.description.map((bullet, i) => (
                                        <li key={i} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex gap-2 items-start">
                                            <span className="text-gray-400 dark:text-gray-500">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Technologies */}
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
