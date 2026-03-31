import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { searchItems } from "../data/searchData";

const NavBar = () => {
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Close menu/search on route change
    useEffect(() => {
        setMenuOpen(false);
        setSearchOpen(false);
        setSearchQuery("");
    }, [location]);

    // Focus search input when opened
    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setSearchOpen(false);
                setSearchQuery("");
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent body scroll when menu/search is open on mobile
    useEffect(() => {
        if (menuOpen || searchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen, searchOpen]);

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

    // Search filtering
    const searchResults = searchQuery.trim()
        ? searchItems.filter((item) => {
            const q = searchQuery.toLowerCase();
            return (
                item.title.toLowerCase().includes(q) ||
                (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
                (item.keywords && item.keywords.toLowerCase().includes(q)) ||
                (item.section && item.section.toLowerCase().includes(q))
            );
        })
        : [];

    // Group results by section
    const groupedResults = searchResults.reduce((acc, item) => {
        const section = item.section || "Other";
        if (!acc[section]) acc[section] = [];
        acc[section].push(item);
        return acc;
    }, {});

    const handleResultClick = (path) => {
        navigate(path);
        setSearchOpen(false);
        setSearchQuery("");
    };

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Experience", to: "/experience" },
        { label: "Projects", to: "/projects" },
    ];

    // Arrow icon used throughout
    const ArrowIcon = ({ className = "w-2.5 h-2.5" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" className={className} fill="currentColor">
            <path d="M11.5 3a.5.5 0 0 1 .5.5V9l-.01.102a.5.5 0 0 1-.98-.001L11 9V4.707l-6.647 6.647a.5.5 0 0 1-.707-.707L10.293 4H6a.5.5 0 0 1 0-1z"/>
        </svg>
    );

    // Sidebar content (shared between desktop sidebar and mobile menu)
    const SidebarContent = () => (
        <>
            <div className="flex flex-col gap-2 items-start mb-12">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

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
                                        <ArrowIcon />
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
                                        <ArrowIcon />
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>

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
                                <ArrowIcon />
                            </a>
                        )
                    ))}
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* ===== MOBILE: Top bar with hamburger + search ===== */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-[#fafafa]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">JS</span>
                <div className="flex items-center gap-4">
                    {/* Search button */}
                    <button
                        onClick={() => { setSearchOpen(true); setMenuOpen(false); }}
                        className="text-gray-600 dark:text-gray-400"
                        aria-label="Search"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                        </svg>
                    </button>
                    {/* Hamburger / Close */}
                    <button
                        onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
                        className="text-gray-600 dark:text-gray-400"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ===== MOBILE: Full-screen menu overlay ===== */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-[#fafafa] dark:bg-[#0a0a0a] transition-all duration-300 ease-in-out
                    ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
            >
                <div className="pt-20 px-8 pb-8 h-full overflow-y-auto">
                    {/* Large nav links - Apple style */}
                    <div className="flex flex-col gap-1 mb-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="text-2xl font-semibold text-gray-900 dark:text-gray-100 py-2 border-b border-gray-200 dark:border-gray-800"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="text-2xl font-semibold text-gray-900 dark:text-gray-100 py-2 border-b border-gray-200 dark:border-gray-800"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Recent work */}
                    <div className="flex flex-col gap-3 mb-8">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recent work</h3>
                        {recentWork.map((project, index) => (
                            <div key={index} className="flex flex-col gap-1.5">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{project.title}</span>
                                <div className="flex flex-col gap-1">
                                    {project.links.map((link, i) => (
                                        link.url.startsWith("/") ? (
                                            <Link
                                                key={i}
                                                to={link.url}
                                                className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-0.5"
                                            >
                                                {link.label} <ArrowIcon />
                                            </Link>
                                        ) : (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-[#2997FF] hover:text-[#147CE5] transition-colors inline-flex items-center gap-0.5"
                                            >
                                                {link.label} <ArrowIcon />
                                            </a>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact links */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</h3>
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
                                        {link.name} <ArrowIcon />
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SEARCH OVERLAY (both mobile and desktop) ===== */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-200
                    ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                />

                {/* Search panel */}
                <div className={`relative mx-auto mt-0 md:mt-16 max-w-xl w-full bg-[#fafafa] dark:bg-[#1a1a1a] md:rounded-xl shadow-2xl transition-transform duration-200
                    ${searchOpen ? 'translate-y-0' : '-translate-y-4'}`}>
                    {/* Search input */}
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200 dark:border-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-grow bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                        />
                        <button
                            onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>

                    {/* Results */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {searchQuery.trim() && Object.keys(groupedResults).length === 0 && (
                            <div className="px-5 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                                No results for "{searchQuery}"
                            </div>
                        )}

                        {Object.entries(groupedResults).map(([section, items]) => (
                            <div key={section}>
                                <div className="px-5 pt-4 pb-1">
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        {section}
                                    </span>
                                </div>
                                {items.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleResultClick(item.path)}
                                        className="w-full text-left px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                            {item.type === "page" && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                </svg>
                                            )}
                                            {item.type === "experience" && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {item.type === "project" && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            )}
                                            {item.type === "contact" && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            )}
                                            {item.type === "about" && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                                {item.title}
                                            </div>
                                            {item.subtitle && (
                                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                    {item.subtitle}
                                                </div>
                                            )}
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-300 dark:text-gray-600 ml-auto shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        ))}

                        {!searchQuery.trim() && (
                            <div className="px-5 py-6 text-center text-gray-400 dark:text-gray-500 text-sm">
                                Search for pages, experience, projects, and more
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP: Sidebar ===== */}
            <nav className="hidden md:flex bg-[#fafafa] dark:bg-[#0a0a0a] w-56 min-h-screen sticky top-0 flex-col px-6 py-8">
                {/* Search button for desktop */}
                <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-8 px-2 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path strokeLinecap="round" d="m21 21-4.35-4.35" />
                    </svg>
                    Search...
                </button>

                <SidebarContent />
            </nav>
        </>
    );
};

export default NavBar;
