import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'
import Introduction from './Introduction';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { useState } from 'react';

// Win2K Taskbar at the bottom
const Taskbar = () => {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    });

    // Update clock every minute
    useState(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 10000);
        return () => clearInterval(interval);
    });

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30px',
            backgroundColor: '#c0c0c0',
            borderTop: '2px solid #ffffff',
            display: 'flex',
            alignItems: 'center',
            padding: '0 4px',
            gap: '4px',
            zIndex: 1000,
            fontFamily: 'Tahoma, Verdana, sans-serif',
            boxShadow: '0 -1px 0 #808080',
        }}>
            {/* Start button */}
            <button style={{
                background: 'linear-gradient(180deg, #d4d0c8 0%, #b0ae9f 100%)',
                borderTop: '2px solid #ffffff',
                borderLeft: '2px solid #ffffff',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                padding: '1px 8px',
                fontWeight: 'bold',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                height: '22px',
                fontFamily: 'Tahoma, sans-serif',
            }}>
                {/* Windows flag icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="0" y="0" width="6" height="6" fill="#ff0000"/>
                    <rect x="8" y="0" width="6" height="6" fill="#00aa00"/>
                    <rect x="0" y="8" width="6" height="6" fill="#0000ff"/>
                    <rect x="8" y="8" width="6" height="6" fill="#ffaa00"/>
                </svg>
                <span>Start</span>
            </button>

            {/* Separator */}
            <div style={{ width: '2px', height: '20px', borderLeft: '1px solid #808080', borderRight: '1px solid #ffffff', margin: '0 2px' }} />

            {/* Active "window" tab */}
            <div style={{
                backgroundColor: '#d4d0c8',
                borderTop: '2px solid #808080',
                borderLeft: '2px solid #808080',
                borderRight: '2px solid #ffffff',
                borderBottom: '2px solid #ffffff',
                padding: '1px 8px',
                fontSize: '11px',
                height: '22px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                minWidth: '140px',
            }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#4aa0e0" stroke="#aaccee" strokeWidth="1"/>
                    <ellipse cx="8" cy="8" rx="3" ry="7" stroke="#aaccee" strokeWidth="1" fill="none"/>
                    <line x1="1" y1="8" x2="15" y2="8" stroke="#aaccee" strokeWidth="1"/>
                </svg>
                JS Portfolio — Internet Explorer
            </div>

            {/* System tray */}
            <div style={{
                marginLeft: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: '#d4d0c8',
                borderTop: '1px solid #808080',
                borderLeft: '1px solid #808080',
                borderRight: '1px solid #ffffff',
                borderBottom: '1px solid #ffffff',
                padding: '2px 6px',
                height: '22px',
                fontSize: '11px',
            }}>
                <span title="Network">🌐</span>
                <span title="Volume">🔊</span>
                <span style={{ fontSize: '11px', fontFamily: 'Tahoma, sans-serif' }}>{time}</span>
            </div>
        </div>
    );
};

function AppInner() {
    const location = useLocation();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#008080', /* Win2K teal desktop */
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,100,100,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,80,100,0.2) 0%, transparent 40%)',
        }}>
            {/* Desktop area */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                paddingBottom: '30px', /* taskbar height */
            }}>
                {/* Desktop icon column (far left, behind sidebar on desktop) */}
                <div className="hidden md:flex flex-col gap-4 p-3" style={{ width: '64px', alignItems: 'center' }}>
                    <DesktopIcon icon="🖥️" label="My Computer" />
                    <DesktopIcon icon="📁" label="My Docs" />
                    <DesktopIcon icon="🗑️" label="Recycle Bin" />
                    <DesktopIcon icon="🌐" label="IE 6.0" />
                </div>

                {/* Main content "window" framing */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '8px 8px 8px 0',
                    backgroundColor: '#d4d0c8',
                    borderTop: '2px solid #ffffff',
                    borderLeft: '2px solid #ffffff',
                    borderRight: '2px solid #404040',
                    borderBottom: '2px solid #404040',
                    boxShadow: '2px 2px 0 #000000',
                    overflow: 'hidden',
                }}>
                    <NavBar />
                    <main
                        style={{
                            flex: 1,
                            overflowX: 'hidden',
                            overflowY: 'auto',
                            backgroundColor: '#d4d0c8',
                            paddingTop: '0',
                        }}
                        className="pt-8 md:pt-0"
                    >
                        {/* IE-style address bar at top of content */}
                        <div
                            className="hidden md:flex"
                            style={{
                                backgroundColor: '#d4d0c8',
                                padding: '3px 6px',
                                borderBottom: '1px solid #808080',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '11px',
                                fontFamily: 'Tahoma, sans-serif',
                            }}
                        >
                            <span style={{ color: '#808080' }}>Address</span>
                            <div
                                className="win-inset"
                                style={{ flex: 1, padding: '1px 6px', display: 'flex', alignItems: 'center' }}
                            >
                                <span style={{ color: '#0000ff' }}>
                                    {location.pathname === '/' ? 'https://japsinghx.dev/' : `https://japsinghx.dev${location.pathname}`}
                                </span>
                            </div>
                            <button className="win-btn" style={{ minWidth: 'auto', padding: '1px 10px' }}>Go</button>
                            <button className="win-btn" style={{ minWidth: 'auto', padding: '1px 10px' }}>🔄</button>
                        </div>

                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Introduction />
                                    <Experience />
                                </>
                            } />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                </div>
            </div>

            <Taskbar />
        </div>
    );
}

const DesktopIcon = ({ icon, label }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
        cursor: 'pointer',
        padding: '4px',
    }}
    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
    >
        <span style={{ fontSize: '24px' }}>{icon}</span>
        <span style={{
            fontSize: '10px',
            color: '#ffffff',
            textShadow: '1px 1px 2px #000',
            textAlign: 'center',
            fontFamily: 'Tahoma, sans-serif',
        }}>{label}</span>
    </div>
);

function App() {
    return (
        <Router>
            <AppInner />
        </Router>
    );
}

export default App
