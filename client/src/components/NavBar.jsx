import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [copied, setCopied] = useState(false);

    const recentWork = [
        {
            title: "Breeze",
            links: [
                { label: "Learn More", url: "/projects" },
                { label: "Download iOS App", url: "https://apps.apple.com/us/app/breeze-aqi-and-allergies/id6757069490" }
            ]
        }
    ];

    const contactLinks = [
        {
            name: "japsinghx@gmail.com",
            email: "japsinghx@gmail.com",
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

    const copyEmail = () => {
        navigator.clipboard.writeText("japsinghx@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <nav className="bg-[#fafafa] dark:bg-[#0a0a0a] w-56 min-h-screen sticky top-0 flex flex-col px-6 py-8">
            {/* Name / Logo */}

            {/* Nav Links */}
            <div className="flex flex-col gap-2 items-start mb-12">
                <Link
                    to="/"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                    Home
                </Link>
                <Link
                    to="/experience"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                    Experience
                </Link>
                <Link
                    to="/projects"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                    Projects
                </Link>
            </div>

            {/* Recent Work */}
            <div className="flex flex-col gap-4 mb-12">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Recent work</h3>
                {recentWork.map((project, index) => (
                    <div key={index} className="flex flex-col gap-1.5">
                        <span className="text-sm text-gray-900 dark:text-gray-100">{project.title}</span>
                        <div className="flex flex-col gap-1">
                            {project.links.map((link, i) => (
                                link.url.startsWith("/") ? (
                                    <Link
                                        key={i}
                                        to={link.url}
                                        className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-0.5"
                                    >
                                        {link.label}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-2.5 h-2.5" fill="currentColor">
                                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </Link>
                                ) : (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-0.5"
                                    >
                                        {link.label}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-2.5 h-2.5" fill="currentColor">
                                            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                        </svg>
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Contact</h3>
                <div className="flex flex-col gap-2">
                    {contactLinks.map((link, index) => (
                        link.email ? (
                            <button
                                key={index}
                                onClick={copyEmail}
                                className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-1 text-left"
                            >
                                {link.name}
                                {copied ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                    </svg>
                                )}
                            </button>
                        ) : (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-0.5"
                            >
                                {link.name}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className="w-2.5 h-2.5" fill="currentColor">
                                    <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
                                </svg>
                            </a>
                        )
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
