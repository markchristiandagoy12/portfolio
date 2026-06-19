import React, { useState } from 'react'; // Added useState hook
import profileImg from './assets/profile.jpg';

// 1. IMPORT ALL YOUR NEW SCREENSHOTS HERE
import screenshot1 from './assets/screenshot1.png';
import screenshot2 from './assets/screenshot2.png';
import screenshot3 from './assets/screenshot3.png';
import screenshot4 from './assets/screenshot4.png';
import screenshot5 from './assets/screenshot5.png';

function App() {
  // 2. STORE THEM ALL IN THE INTERACTIVE ARRAY
  const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5
  ];

  // 3. TRACK THE ACTIVE SCREENSHOT INDEX
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length);
  };

  const theme = {
    bg: "#05070F", 
    cardBg: "#0F1626", 
    cardBorder: "#1E293B",
    accent: "#3B82F6", 
    accentPurple: "#8B5CF6",
    textPrimary: "#FFFFFF", 
    textSecondary: "#94A3B8", 
    textAccent: "#38BDF8",
    accentMint: "#10B981"
  };

  const injectStyles = `
    html, body, #root {
      margin: 0 !important;
      padding: 0 !important;
      width: 100% !important;
      background-color: ${theme.bg};
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulseGlow {
      0% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
      50% { box-shadow: 0 0 22px rgba(59, 130, 246, 0.4); }
      100% { box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
    }

    .animate-fade { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    
    .btn-hover { transition: all 0.2s ease; }
    .btn-hover:hover {
      transform: translateY(-2px);
      background: #1E293B !important;
      border-color: ${theme.textAccent} !important;
      color: ${theme.textAccent} !important;
    }

    .btn-primary-hover { transition: all 0.2s ease; }
    .btn-primary-hover:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.35) !important;
      filter: brightness(1.1);
    }

    .skill-pill { transition: all 0.2s ease; cursor: default; }
    .skill-pill:hover {
      background: #1E293B !important;
      border-color: ${theme.textAccent} !important;
      color: #FFFFFF !important;
    }

    .main-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      width: 100%;
    }

    .featured-box {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 1.5rem;
    }

    /* Slider Button Hovers */
    .slider-arrow {
      transition: background 0.2s, transform 0.1s;
    }
    .slider-arrow:hover {
      background: rgba(59, 130, 246, 0.8) !important;
      transform: scale(1.1);
    }
    .slider-arrow:active {
      transform: scale(0.95);
    }

    @media (max-width: 1024px) {
      .main-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 768px) {
      .featured-box { grid-template-columns: 1fr; }
      .responsive-header { padding: 2rem !important; flex-direction: column !important; text-align: center; }
      .header-right { align-items: center !important; }
      .contact-links { justify-content: center !important; }
    }
  `;

  const handleViewResume = () => {
    window.open('/mark_resume2.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="main-wrapper" style={{
      backgroundColor: theme.bg,
      minHeight: "100vh",
      width: "100%",
      padding: "2.5rem max(2rem, 5vw)",
      fontFamily: "system-ui, -apple-system, sans-serif",
      color: theme.textPrimary,
      display: "flex",
      flexDirection: "column",
      gap: "2rem"
    }}>
      <style>{injectStyles}</style>

      {/* HEADER SECTION */}
      <header className="responsive-header animate-fade" style={{
        display: "flex",
        gap: "2rem",
        padding: "2.5rem 3rem",
        background: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: "24px",
        alignItems: "center"
      }}>
        <div style={{ position: "relative", width: "130px", height: "130px", flexShrink: 0 }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "24px", padding: "3px",
            background: `linear-gradient(135deg, ${theme.accent} 0%, ${theme.accentPurple} 100%)`,
            animation: "pulseGlow 3s infinite ease-in-out", overflow: "hidden"
          }}>
            <img src={profileImg} alt="Mark" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "21px" }} />
          </div>
        </div>

        <div className="header-right" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flexGrow: 1 }}>
          <span style={{ color: theme.accentMint, textTransform: "uppercase", fontSize: "0.75rem", fontWeight: "800", letterSpacing: "2px", marginBottom: "0.25rem" }}>
            🟢 Available For Opportunities
          </span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", margin: "0 0 0.25rem 0", letterSpacing: "-1px" }}>
            Mark Christian Dagoy
          </h1>
          <h2 style={{ fontSize: "1.15rem", fontWeight: "500", margin: "0 0 1rem 0", color: theme.textAccent }}>
           Information Systems Graduate | React & Firebase Developer
          </h2>

          {/* VISIBLE CONTACT INFO ROW */}
          <div className="contact-links" style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", marginBottom: "1.2rem", fontSize: "0.9rem", color: theme.textSecondary }}>
            <span>📍 Bulan, Sorsogon</span>
            <a href="mailto:markchristiandagoy732@gmail.com" style={{ color: theme.textSecondary, textDecoration: "none" }} className="btn-hover">✉️ markchristiandagoy732@gmail.com</a>
            <a href="https://github.com/markchristiandagoy12" target="_blank" rel="noopener noreferrer" style={{ color: theme.textSecondary, textDecoration: "none" }} className="btn-hover">🐙 GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: theme.textSecondary, textDecoration: "none" }} className="btn-hover">💼 LinkedIn</a>
          </div>

          <button onClick={handleViewResume} className="btn-primary-hover" style={{ padding: "0.7rem 1.5rem", borderRadius: "10px", background: theme.accent, color: "#FFFFFF", border: "none", fontSize: "0.9rem", fontWeight: "600", cursor: "pointer" }}>
            📄 View Full Resume
          </button>
        </div>
      </header>

      {/* TWO COLUMN MAIN CONTENT */}
      <div className="main-grid animate-fade">
        
        {/* LEFT MAJOR COLUMN: PROJECTS & EXP */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* FEATURED WORK WITH INTERACTIVE SCREENSHOT SLIDER */}
          <section style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", margin: "0 0 1.5rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>🚀 Featured Capstone Project</h2>
            
            <div className="featured-box">
              {/* IMAGE SLIDER CONTAINER */}
              <div style={{ 
                background: "#070B10", 
                borderRadius: "16px", 
                border: `1px solid ${theme.cardBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "260px", // FIXED CONTAINER HEIGHT: Keeps it from jumping up or down
                overflow: "hidden",
                position: "relative"
              }}>
                {/* Left Arrow Button */}
                <button 
                  onClick={handlePrev}
                  className="slider-arrow"
                  style={{
                    position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                    background: "rgba(15, 22, 38, 0.75)", border: `1px solid ${theme.cardBorder}`,
                    color: "#FFF", width: "36px", height: "36px", borderRadius: "50%",
                    cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 2, userSelect: "none"
                  }}
                >
                  ❮
                </button>

                {/* Main Dynamic Image View */}
                <img 
                  src={screenshots[currentIndex]} 
                  alt={`FindIt Interface Screenshot ${currentIndex + 1}`} 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "contain", // CONTAIN STRATEGY: Scaled nicely without altering the layout height
                    transition: "all 0.3s ease" 
                  }} 
                />

                {/* Right Arrow Button */}
                <button 
                  onClick={handleNext}
                  className="slider-arrow"
                  style={{
                    position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
                    background: "rgba(15, 22, 38, 0.75)", border: `1px solid ${theme.cardBorder}`,
                    color: "#FFF", width: "36px", height: "36px", borderRadius: "50%",
                    cursor: "pointer", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 2, userSelect: "none"
                  }}
                >
                  ❯
                </button>

                {/* Mini Bottom Dots Indicator */}
                <div style={{ position: "absolute", bottom: "10px", display: "flex", gap: "6px", zIndex: 2 }}>
                  {screenshots.map((_, i) => (
                    <div 
                      key={i} 
                      style={{
                        width: "8px", height: "8px", borderRadius: "50%",
                        backgroundColor: currentIndex === i ? theme.accent : "rgba(255,255,255,0.3)",
                        transition: "background-color 0.3s"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Project Meta details */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: "1.3rem", margin: 0, fontWeight: "700" }}>FindIt – Food Locator</h3>
                    <span style={{ fontSize: "0.7rem", padding: "0.2rem 0.5rem", borderRadius: "6px", background: "rgba(16, 185, 129, 0.15)", color: theme.accentMint, fontWeight: "700" }}>🏆 Best Capstone</span>
                  </div>
                  <p style={{ fontSize: "0.95rem", color: theme.textSecondary, margin: "0 0 1rem 0", lineHeight: "1.5" }}>
                    A real-time food marketplace platform connecting local grocery retailers and suppliers.
                  </p>

                  <div style={{ color: theme.textSecondary, fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1rem" }}>
                    <div>🔹 <b>Product Search & Filter Module:</b> Instantly query items by category, price range, and active inventory levels.</div>
                    <div>🔹 <b>Market Transparency:</b> Built to allow retail buyers to directly view and evaluate competing local suppliers.</div>
                    <div>🔹 <b>Data Syncing & Roles:</b> Powered by Firebase Firestore with secure multi-tier account role separation.</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href="https://github.com/markchristiandagoy12" target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', padding: "0.5rem", background: "#1E293B", borderRadius: "8px", color: "#FFF", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600" }} className="btn-hover">🐙 GitHub</a>
                  <a href="https://github.com" target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: "0.5rem", background: theme.accent, borderRadius: "8px", color: "#FFF", textDecoration: "none", fontSize: "0.85rem", fontWeight: "600" }} className="btn-primary-hover">⚡ Live Demo</a>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.3rem", margin: "0 0 1.5rem 0" }}>💼 Professional Experience</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.25rem" }}>
              <h3 style={{ fontSize: "1.1rem", margin: "0", fontWeight: "600" }}>On-the-Job Trainee</h3>
              <span style={{ fontSize: "0.85rem", color: theme.textAccent, fontWeight: "600" }}>Jan 2026 – Apr 2026</span>
            </div>
            <p style={{ fontSize: "0.95rem", color: theme.accentMint, margin: "0 0 1rem 0", fontWeight: "500" }}>Bureau of Internal Revenue, Taguig City</p>
            <ul style={{ paddingLeft: "1.2rem", margin: "0", color: theme.textSecondary, fontSize: "0.95rem", lineHeight: "1.6" }}>
              <li style={{ marginBottom: "0.5rem" }}>Encoded and processed taxpayer registration data using specialized state-level platforms (IRIS and ORUS).</li>
              <li style={{ marginBottom: "0.5rem" }}>Handled confidential data under strict privacy protocols and verified asset records to ensure accuracy.</li>
              <li>Supported administrative workflows, processed documents, and provided foundational IT support.</li>
            </ul>
          </section>

        </div>

        {/* RIGHT MINOR COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          
          {/* ABOUT ME */}
          <section style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: "24px", padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", margin: "0 0 0.75rem 0" }}>👤 About Me</h2>
            <p style={{ fontSize: "0.95rem", color: theme.textSecondary, lineHeight: "1.6", margin: "0" }}>
              Information Systems graduate with hands-on experience in government data processing, database management, and modern web development. Built a real-time food marketplace platform using Firebase and Firestore, focusing on responsive UI and efficient data synchronization. Driven to create practical web environments and structured data systems.
            </p>
          </section>

          {/* EDUCATION */}
          <section style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: "24px", padding: "1.75rem" }}>
            <h2 style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" }}>🎓 Education</h2>
            <h3 style={{ fontSize: "1rem", margin: "0 0 0.2rem 0", fontWeight: "600" }}>BS in Information Systems</h3>
            <p style={{ fontSize: "0.9rem", color: theme.textSecondary, margin: "0 0 0.25rem 0" }}>Sorsogon State University</p>
            <span style={{ fontSize: "0.8rem", color: theme.textAccent }}>Graduated 2026</span>
          </section>

          {/* TECH STACK */}
          <section style={{ background: theme.cardBg, border: `1px solid ${theme.cardBorder}`, borderRadius: "24px", padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            
            <div>
              <h3 style={{ fontSize: "0.9rem", color: "#FFF", margin: "0 0 0.6rem 0", textTransform: "uppercase", letterSpacing: "1px" }}>🛠️ Tech Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["React.js", "JavaScript", "Firebase", "Firestore", "HTML5", "CSS3", "Vite"].map((s, i) => (
                  <span key={i} className="skill-pill" style={{ padding: "0.35rem 0.7rem", background: "#070B10", border: `1px solid ${theme.cardBorder}`, borderRadius: "8px", fontSize: "0.8rem", color: theme.textSecondary }}>{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "0.9rem", color: "#FFF", margin: "0 0 0.6rem 0", textTransform: "uppercase", letterSpacing: "1px" }}>🏛️ Tools & Systems</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["IRIS", "ORUS"].map((s, i) => (
                  <span key={i} className="skill-pill" style={{ padding: "0.35rem 0.7rem", background: "#070B10", border: `1px solid ${theme.cardBorder}`, borderRadius: "8px", fontSize: "0.8rem", color: theme.textAccent }}>{s}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "0.9rem", color: "#FFF", margin: "0 0 0.6rem 0", textTransform: "uppercase", letterSpacing: "1px" }}>💪 Core Strengths</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["Problem Solving", "Data Management", "Documentation"].map((s, i) => (
                  <span key={i} className="skill-pill" style={{ padding: "0.35rem 0.7rem", background: "#070B10", border: `1px solid ${theme.cardBorder}`, borderRadius: "8px", fontSize: "0.8rem", color: theme.accentMint }}>{s}</span>
                ))}
              </div>
            </div>

          </section>

        </div>

      </div>
    </div>
  );
}

export default App;