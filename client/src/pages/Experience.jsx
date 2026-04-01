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
            ],
            icon: "💼",
        },
        {
            date: "2023 — Now",
            title: "Software Development Consultant",
            company: "FDM Group",
            link: "https://www.fdmgroup.com",
            type: "Remote • Full-time",
            icon: "🖥️",
        },
        {
            date: "2021 — 2023",
            title: "Product Owner",
            company: "Doaba",
            link: "https://www.doaba.us",
            type: "Santa Barbara, California • Owner",
            description: [
                "Launched and scaled an e-commerce clothing brand, owning product strategy/R&D (Shopify, JavaScript, Adobe Illustrator) to drive 20% sales growth between releases and 15% margin improvement via supplier negotiations.",
                "Built strong brand and retention programs (85% repeat customer rate) through strategic campaigns and cross-functional coordination."
            ],
            icon: "🛒",
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
            ],
            icon: "🎓",
        }
    ];

    return (
        <section style={{ padding: "0 12px 12px 12px", fontFamily: "Tahoma, Verdana, sans-serif" }}>
            {/* Window chrome */}
            <div className="win-window">
                {/* Title bar */}
                <div className="win-titlebar">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="3" width="14" height="10" rx="1" fill="#d4a017" stroke="#a07010" strokeWidth="1"/>
                        <rect x="4" y="1" width="4" height="3" rx="0.5" fill="#d4a017" stroke="#a07010" strokeWidth="1"/>
                    </svg>
                    <span className="win-titlebar-text">Work Experience — Japmanpreet Singh</span>
                    <span className="win-titlebar-btn">_</span>
                    <span className="win-titlebar-btn">□</span>
                    <span className="win-titlebar-btn">✕</span>
                </div>

                {/* Toolbar */}
                <div style={{
                    backgroundColor: "#d4d0c8",
                    padding: "3px 4px",
                    borderBottom: "1px solid #808080",
                    display: "flex",
                    gap: "4px",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}>
                    <button className="win-btn" style={{ minWidth: "auto", padding: "1px 8px" }}>⬅ Back</button>
                    <button className="win-btn" style={{ minWidth: "auto", padding: "1px 8px" }}>➡ Forward</button>
                    <div style={{ width: "1px", height: "18px", backgroundColor: "#808080", margin: "0 2px" }} />
                    <button className="win-btn" style={{ minWidth: "auto", padding: "1px 8px" }}>🔄 Refresh</button>
                    <div style={{ flex: 1, minWidth: "120px", marginLeft: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ fontSize: "11px", color: "#808080" }}>Address:</span>
                        <div className="win-inset" style={{ flex: 1, padding: "1px 6px", fontSize: "11px", display: "flex", alignItems: "center" }}>
                            <span style={{ color: "#0000ff" }}>https://japsinghx.dev/experience</span>
                        </div>
                        <button className="win-btn" style={{ minWidth: "auto", padding: "1px 8px" }}>Go</button>
                    </div>
                </div>

                {/* Table header */}
                <div style={{ backgroundColor: "#d4d0c8", padding: "4px 8px", fontSize: "11px", fontWeight: "bold", borderBottom: "1px solid #808080" }}>
                    Work Experience — {workExperience.length} items
                </div>

                {/* Table content */}
                <div style={{ backgroundColor: "#ffffff", padding: "0" }}>
                    <table className="win-table" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th style={{ width: "24px" }}></th>
                                <th>Position</th>
                                <th>Company</th>
                                <th>Period</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workExperience.map((item, index) => (
                                <>
                                    <tr key={`row-${index}`} style={{ cursor: "pointer" }}>
                                        <td style={{ textAlign: "center", fontSize: "14px" }}>{item.icon}</td>
                                        <td>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px" }}
                                            >
                                                {item.title}
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "#0000ff", textDecoration: "underline", fontSize: "11px" }}
                                            >
                                                {item.company}
                                            </a>
                                        </td>
                                        <td style={{ whiteSpace: "nowrap", fontSize: "11px", color: "#808080" }}>{item.date}</td>
                                        <td style={{ fontSize: "11px" }}>{item.type}</td>
                                    </tr>
                                    {item.description && (
                                        <tr key={`desc-${index}`}>
                                            <td></td>
                                            <td colSpan={4} style={{ backgroundColor: "#f8f8f8", paddingLeft: "16px", paddingTop: "2px", paddingBottom: "6px" }}>
                                                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "11px", lineHeight: "1.7" }}>
                                                    {item.description.map((bullet, i) => (
                                                        <li key={i} style={{ color: "#333333" }}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Status bar */}
                <div className="win-statusbar">
                    <span>{workExperience.length} object(s)</span>
                    <div style={{ width: "1px", height: "16px", backgroundColor: "#808080", margin: "0 4px" }} />
                    <span style={{ color: "#808080" }}>Sorted by Date</span>
                    <span style={{ marginLeft: "auto", fontSize: "10px", color: "#808080" }}>Trusted sites</span>
                </div>
            </div>
        </section>
    );
};

export default Experience;
