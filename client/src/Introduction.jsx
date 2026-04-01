const Introduction = () => {
    return (
        <section style={{ padding: "12px", fontFamily: "Tahoma, Verdana, sans-serif" }}>
            {/* Welcome banner / marquee */}
            <marquee
                behavior="scroll"
                direction="left"
                style={{
                    backgroundColor: "#0a246a",
                    color: "#ffffff",
                    fontSize: "11px",
                    padding: "2px 0",
                    marginBottom: "10px",
                    fontFamily: "Tahoma, sans-serif",
                }}
            >
                ★ Welcome to Japmanpreet Singh&apos;s Personal Homepage ★ &nbsp;&nbsp;&nbsp; Product-Oriented Engineer &nbsp;&nbsp;&nbsp; Austin, Texas &nbsp;&nbsp;&nbsp; Best viewed at 1024x768 in Internet Explorer 6 ★
            </marquee>

            {/* Main intro window */}
            <div className="win-window" style={{ marginBottom: "10px" }}>
                {/* Title bar */}
                <div className="win-titlebar">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="2" width="12" height="12" rx="1" fill="#4aa0e0" stroke="#aaccee" strokeWidth="1"/>
                        <text x="3" y="11" fontSize="9" fill="#fff" fontFamily="Tahoma">JS</text>
                    </svg>
                    <span className="win-titlebar-text">About Me — Japmanpreet Singh</span>
                    <span className="win-titlebar-btn">_</span>
                    <span className="win-titlebar-btn">□</span>
                    <span className="win-titlebar-btn">✕</span>
                </div>

                {/* Content area */}
                <div style={{ padding: "10px", backgroundColor: "#ffffff" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Tahoma, sans-serif", fontSize: "11px" }}>
                        <tbody>
                            <tr>
                                <td style={{ verticalAlign: "top", paddingRight: "16px", whiteSpace: "nowrap", width: "1%" }}>
                                    {/* User icon */}
                                    <div style={{
                                        width: "64px",
                                        height: "64px",
                                        backgroundColor: "#d4d0c8",
                                        border: "2px inset #808080",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        gap: "2px",
                                        marginBottom: "4px",
                                    }}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                            <circle cx="16" cy="12" r="7" fill="#b0ae9f" stroke="#808080" strokeWidth="1"/>
                                            <path d="M4 28 C4 20 28 20 28 28" fill="#b0ae9f" stroke="#808080" strokeWidth="1"/>
                                        </svg>
                                        <span style={{ fontSize: "9px", color: "#000080", textAlign: "center" }}>japsinghx</span>
                                    </div>
                                    {/* Status badge */}
                                    <div style={{
                                        backgroundColor: "#00aa00",
                                        color: "#ffffff",
                                        fontSize: "9px",
                                        padding: "1px 4px",
                                        textAlign: "center",
                                        border: "1px solid #007700",
                                    }}>
                                        ● Online
                                    </div>
                                </td>
                                <td style={{ verticalAlign: "top" }}>
                                    <h1 style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        color: "#000080",
                                        fontFamily: "Tahoma, sans-serif",
                                        marginBottom: "2px",
                                        borderBottom: "1px solid #d4d0c8",
                                        paddingBottom: "4px",
                                    }}>
                                        Japmanpreet Singh
                                    </h1>
                                    <p style={{ fontSize: "11px", color: "#808080", marginBottom: "8px", fontStyle: "italic" }}>
                                        Product-Oriented Engineer
                                    </p>

                                    <h2 style={{
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        color: "#000000",
                                        backgroundColor: "#d4d0c8",
                                        padding: "2px 6px",
                                        borderTop: "2px solid #ffffff",
                                        borderLeft: "2px solid #ffffff",
                                        borderRight: "2px solid #808080",
                                        borderBottom: "2px solid #808080",
                                        marginBottom: "6px",
                                        display: "inline-block",
                                    }}>
                                        About
                                    </h2>

                                    <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#000000", marginBottom: "8px" }}>
                                        I&apos;m a hands-on engineer passionate about owning products end-to-end. From discovering user needs
                                        and shaping strategy to leading cross-functional delivery and driving measurable outcomes.
                                        I excel at prioritizing high-impact work, automating secure workflows in regulated environments,
                                        and iterating fast with AI-powered tools.
                                    </p>

                                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                        <button className="win-btn">
                                            📄 Download Resume
                                        </button>
                                        <button className="win-btn">
                                            ✉ Send Email
                                        </button>
                                        <a href="https://github.com/japsinghx" target="_blank" rel="noopener noreferrer">
                                            <button className="win-btn">
                                                💾 GitHub
                                            </button>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Status bar */}
                <div className="win-statusbar">
                    <span>Done</span>
                    <span style={{ marginLeft: "8px", color: "#0000ff" }}>🌐 japsinghx.dev</span>
                    <span style={{ marginLeft: "auto", fontSize: "10px", color: "#808080" }}>Internet zone</span>
                </div>
            </div>

            {/* Fun visitor counter + info row */}
            <div style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginBottom: "10px",
                fontSize: "11px",
                fontFamily: "Tahoma, sans-serif",
            }}>
                <div className="win-inset" style={{ padding: "4px 8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ color: "#808080" }}>Visitors:</span>
                    <span style={{
                        fontFamily: "Courier New, monospace",
                        backgroundColor: "#000000",
                        color: "#00ff00",
                        padding: "1px 4px",
                        fontSize: "12px",
                        letterSpacing: "2px",
                    }}>001337</span>
                </div>
                <div className="win-inset" style={{ padding: "4px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#808080" }}>Last updated:</span>
                    <span style={{ color: "#000080" }}>2025</span>
                </div>
                <div className="win-inset" style={{ padding: "4px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ color: "#808080" }}>Location:</span>
                    <span style={{ color: "#000080" }}>Austin, TX 🏠</span>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
