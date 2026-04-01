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

    useEffect(() => {
        setMenuOpen(false);
        setSearchOpen(false);
        setSearchQuery("");
    }, [location]);

    useEffect(() => {
        if (searchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [searchOpen]);

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
        { name: "japsinghx@gmail.com", email: "japsinghx@gmail.com" },
        { name: "GitHub", url: "https://github.com/japsinghx" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/japmanpreet-singh-06052322a/" }
    ];

    const copyEmail = () => {
        navigator.clipboard.writeText("japsinghx@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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

    return (
        <>
            {/* ===== DESKTOP: Left sidebar styled as Win2K Explorer pane ===== */}
            <nav
                className="hidden md:flex flex-col"
                style={{
                    width: "180px",
                    minWidth: "180px",
                    minHeight: "100vh",
                    backgroundColor: "#d4d0c8",
                    borderRight: "2px solid #808080",
                    padding: "4px",
                }}
            >
                {/* Sidebar "window" panel */}
                <div className="win-window flex flex-col flex-1" style={{ height: "100%" }}>
                    {/* Title bar */}
                    <div className="win-titlebar">
                        {/* Globe icon */}
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="7" fill="#4aa0e0" stroke="#aaccee" strokeWidth="1"/>
                            <ellipse cx="8" cy="8" rx="3" ry="7" stroke="#aaccee" strokeWidth="1" fill="none"/>
                            <line x1="1" y1="8" x2="15" y2="8" stroke="#aaccee" strokeWidth="1"/>
                        </svg>
                        <span className="win-titlebar-text">JS Portfolio</span>
                        <span className="win-titlebar-btn" title="Minimize">_</span>
                        <span className="win-titlebar-btn" title="Maximize">□</span>
                        <span className="win-titlebar-btn" title="Close" style={{ backgroundColor: "#c0c0c0", fontWeight: "bold" }}>✕</span>
                    </div>

                    {/* Menu bar */}
                    <div className="win-menubar text-xs">
                        <span className="win-menu-item">File</span>
                        <span className="win-menu-item">View</span>
                        <span className="win-menu-item">Help</span>
                    </div>

                    {/* Search bar */}
                    <div style={{ padding: "4px", borderBottom: "1px solid #808080" }}>
                        <div className="win-inset" style={{ display: "flex", alignItems: "center", padding: "1px 4px", gap: "4px" }}>
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="none" stroke="#808080" strokeWidth="2">
                                <circle cx="9" cy="9" r="6"/>
                                <line x1="14" y1="14" x2="18" y2="18"/>
                            </svg>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
                                onFocus={() => setSearchOpen(true)}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    fontSize: "11px",
                                    fontFamily: "Tahoma, sans-serif",
                                    width: "100%",
                                    color: "#000",
                                }}
                            />
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div style={{ padding: "6px 4px", flex: 1 }}>
                        {/* Nav section */}
                        <div style={{ marginBottom: "8px" }}>
                            <div style={{
                                backgroundColor: "#0a246a",
                                color: "#ffffff",
                                padding: "2px 6px",
                                fontSize: "11px",
                                fontWeight: "bold",
                                marginBottom: "2px",
                            }}>
                                Navigation
                            </div>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "2px 6px",
                                        fontSize: "11px",
                                        color: location.pathname === link.to ? "#ffffff" : "#000080",
                                        textDecoration: "underline",
                                        backgroundColor: location.pathname === link.to ? "#0a246a" : "transparent",
                                        fontFamily: "Tahoma, sans-serif",
                                    }}
                                >
                                    {/* Folder icon */}
                                    <svg width="12" height="10" viewBox="0 0 20 16" fill="none">
                                        <path d="M1 3h6l2 2h10v10H1V3z" fill="#f5d04a" stroke="#c4a800" strokeWidth="1.5"/>
                                    </svg>
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <hr className="win-separator" />

                        {/* Recent Work section */}
                        <div style={{ marginBottom: "8px" }}>
                            <div style={{
                                backgroundColor: "#0a246a",
                                color: "#ffffff",
                                padding: "2px 6px",
                                fontSize: "11px",
                                fontWeight: "bold",
                                marginBottom: "2px",
                            }}>
                                Recent Work
                            </div>
                            {recentWork.map((project, index) => (
                                <div key={index} style={{ padding: "2px 6px" }}>
                                    <div style={{ fontSize: "11px", fontWeight: "bold", marginBottom: "2px" }}>📁 {project.title}</div>
                                    {project.links.map((link, i) => (
                                        link.url.startsWith("/") ? (
                                            <Link key={i} to={link.url} style={{ display: "block", fontSize: "11px", color: "#0000ff", textDecoration: "underline", paddingLeft: "12px" }}>
                                                {link.label}
                                            </Link>
                                        ) : (
                                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: "block", fontSize: "11px", color: "#0000ff", textDecoration: "underline", paddingLeft: "12px" }}>
                                                {link.label}
                                            </a>
                                        )
                                    ))}
                                </div>
                            ))}
                        </div>

                        <hr className="win-separator" />

                        {/* Contact section */}
                        <div>
                            <div style={{
                                backgroundColor: "#0a246a",
                                color: "#ffffff",
                                padding: "2px 6px",
                                fontSize: "11px",
                                fontWeight: "bold",
                                marginBottom: "2px",
                            }}>
                                Contact
                            </div>
                            <div style={{ padding: "2px 6px" }}>
                                {contactLinks.map((link, index) => (
                                    link.email ? (
                                        <button
                                            key={index}
                                            onClick={copyEmail}
                                            style={{ display: "block", fontSize: "11px", color: "#0000ff", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: "2px", fontFamily: "Tahoma, sans-serif" }}
                                        >
                                            ✉ {copied ? "Copied!" : link.name}
                                        </button>
                                    ) : (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: "block", fontSize: "11px", color: "#0000ff", textDecoration: "underline", marginBottom: "2px" }}
                                        >
                                            🔗 {link.name}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Status bar */}
                    <div className="win-statusbar" style={{ fontSize: "10px", marginTop: "auto" }}>
                        <span>Ready</span>
                        <span style={{ marginLeft: "auto" }}>📶 Local</span>
                    </div>
                </div>
            </nav>

            {/* ===== MOBILE: Top taskbar ===== */}
            <div
                className="md:hidden fixed top-0 left-0 right-0 z-50"
                style={{
                    backgroundColor: "#c0c0c0",
                    borderBottom: "2px solid #808080",
                    borderTop: "2px solid #ffffff",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 4px",
                    gap: "4px",
                }}
            >
                <span style={{ fontWeight: "bold", fontSize: "11px", fontFamily: "Tahoma, sans-serif" }}>JS</span>
                <div style={{ width: "1px", height: "18px", backgroundColor: "#808080", margin: "0 2px" }} />
                {navLinks.map((link) => (
                    <Link key={link.to} to={link.to} style={{ fontSize: "11px", color: "#000080", textDecoration: "underline", padding: "1px 4px", fontFamily: "Tahoma, sans-serif" }}>
                        {link.label}
                    </Link>
                ))}
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "4px" }}>
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", fontSize: "11px" }}
                        aria-label="Search"
                    >
                        🔍
                    </button>
                </div>
            </div>

            {/* ===== SEARCH OVERLAY ===== */}
            {searchOpen && searchQuery.trim() && (
                <div
                    style={{
                        position: "fixed",
                        top: "28px",
                        left: "184px",
                        zIndex: 200,
                        width: "300px",
                        backgroundColor: "#ffffff",
                        border: "2px solid #808080",
                        boxShadow: "2px 2px 0 #404040",
                        fontFamily: "Tahoma, sans-serif",
                        fontSize: "11px",
                    }}
                    className="hidden md:block"
                >
                    <div style={{ backgroundColor: "#0a246a", color: "#fff", padding: "2px 6px", fontWeight: "bold" }}>
                        Search Results
                    </div>
                    <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                        {Object.keys(groupedResults).length === 0 ? (
                            <div style={{ padding: "8px", color: "#808080" }}>No results for &quot;{searchQuery}&quot;</div>
                        ) : (
                            Object.entries(groupedResults).map(([section, items]) => (
                                <div key={section}>
                                    <div style={{ backgroundColor: "#d4d0c8", padding: "2px 6px", fontWeight: "bold", fontSize: "10px", textTransform: "uppercase" }}>{section}</div>
                                    {items.map((item) => (
                                        <div
                                            key={item.id || item.title}
                                            onClick={() => handleResultClick(item.path)}
                                            style={{ padding: "3px 10px", cursor: "pointer", color: "#0000ff", textDecoration: "underline" }}
                                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0a246a"; e.currentTarget.style.color = "#fff"; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ""; e.currentTarget.style.color = "#0000ff"; }}
                                        >
                                            {item.title}
                                        </div>
                                    ))}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
