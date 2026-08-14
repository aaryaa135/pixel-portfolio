export default function ResumeViewer() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aarya_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <div className="resume-viewer">
      <div className="resume-header">
        <h2 className="pixel-font" style={{ fontSize: '12px', margin: '0 0 8px', color: '#4a2e4a' }}>
          AARYA GUPTA
        </h2>
        <p style={{ margin: '0 0 4px', color: '#6a4a6a', fontSize: '16px' }}>
          Computer Science Student • Software Engineer
        </p>
        <p style={{ margin: '0 0 16px', color: '#8a6a8a', fontSize: '15px' }}>
          aaryaa135@gmail.com • <a href="https://github.com/aaryaa135" target="_blank" rel="noopener noreferrer" style={{ color: '#8a6a8a' }}>github.com/aaryaa135</a> • <a href="https://linkedin.com/in/aaryagupta" target="_blank" rel="noopener noreferrer" style={{ color: '#8a6a8a' }}>linkedin.com/in/aaryagupta</a>
        </p>
      </div>

      <div className="resume-section">
        <h3 className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a', borderBottom: '2px solid #4a2e4a', paddingBottom: '4px', marginBottom: '12px' }}>
          EXPERIENCE
        </h3>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ margin: '0 0 4px', fontWeight: 'bold' }}>Project Intern — IIT Delhi</p>
          <p style={{ margin: '0 0 4px', color: '#6a4a6a', fontSize: '15px' }}>Jun 2025 — Jul 2025</p>
          <p style={{ margin: '0' }}>Automated Cisco DNA Center REST API workflows, built Linux-based infrastructure automation pipelines, and streamlined Git deployment workflows to improve operational efficiency.</p>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <p style={{ margin: '0 0 4px', fontWeight: 'bold' }}>Web Master — ACM JUIT</p>
          <p style={{ margin: '0 0 4px', color: '#6a4a6a', fontSize: '15px' }}>Aug 2025 — May 2026</p>
          <p style={{ margin: '0' }}>Led the redevelopment of the ACM chapter website, established Git-based collaboration workflows, and improved user engagement through iterative UI/UX enhancements.</p>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a', borderBottom: '2px solid #4a2e4a', paddingBottom: '4px', marginBottom: '12px' }}>
          EDUCATION
        </h3>
        <p style={{ margin: '0 0 4px', fontWeight: 'bold' }}>Jaypee University of Information Technology</p>
        <p style={{ margin: '0 0 4px' }}>B.Tech Computer Science</p>
        <p style={{ margin: '0 0 4px' }}>CGPA: 8.07 / 10</p>
        <p style={{ margin: '0' }}>Expected Graduation: 2027</p>
      </div>

      <div className="resume-section">
        <h3 className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a', borderBottom: '2px solid #4a2e4a', paddingBottom: '4px', marginBottom: '12px' }}>
          TECH STACK
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <span className="tag">Python</span>
          <span className="tag">C++</span>
          <span className="tag">JavaScript</span>
          <span className="tag">SQL</span>
          <span className="tag">FastAPI</span>
          <span className="tag">Django</span>
          <span className="tag">React</span>
          <span className="tag">Next.js</span>
          <span className="tag">PostgreSQL</span>
          <span className="tag">MongoDB</span>
          <span className="tag">Redis</span>
          <span className="tag">Docker</span>
          <span className="tag">Git</span>
          <span className="tag">AWS</span>
          <span className="tag">PyTorch</span>
          <span className="tag">YOLOv8</span>
          <span className="tag">OpenCV</span>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a', borderBottom: '2px solid #4a2e4a', paddingBottom: '4px', marginBottom: '12px' }}>
          PROJECTS
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ border: '2px solid #4a2e4a', padding: '12px', background: '#f4fbf8' }}>
            <p style={{ fontFamily: "'Press Start 2P',monospace", fontSize: '10px', margin: '0 0 6px' }}>AUTHFORGE</p>
            <p style={{ margin: '0 0 4px' }}>Secure Authentication Platform</p>
            <p style={{ margin: '0 0 6px', fontSize: '15px' }}>Production-grade auth with JWT, RBAC, refresh token rotation, Redis token blacklisting, email verification, audit logging.</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="tag">FastAPI</span><span className="tag">Redis</span><span className="tag">Docker</span><span className="tag">Pytest</span>
            </div>
            <a className="btn" href="https://authforge-ovjf.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>LIVE →</a>
            <a className="btn" href="https://github.com/aaryaa135/authforge" target="_blank" rel="noopener noreferrer">GITHUB →</a>
          </div>
          <div style={{ border: '2px solid #4a2e4a', padding: '12px', background: '#fbf6ee' }}>
            <p style={{ fontFamily: "'Press Start 2P',monospace", fontSize: '10px', margin: '0 0 6px' }}>CARDIOVISION</p>
            <p style={{ margin: '0 0 4px' }}>AI Medical Imaging</p>
            <p style={{ margin: '0 0 6px', fontSize: '15px' }}>AI-powered coronary artery stenosis detection using YOLOv8 and Grad-CAM, achieving 94.4% mAP@0.5 and 0.91 F1-score.</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="tag">PyTorch</span><span className="tag">YOLOv8</span><span className="tag">OpenCV</span>
            </div>
            <a className="btn" href="https://cardio-vision-murex.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>LIVE →</a>
            <a className="btn" href="https://github.com/aaryaa135/cardiovision" target="_blank" rel="noopener noreferrer">GITHUB →</a>
          </div>
          <div style={{ border: '2px solid #4a2e4a', padding: '12px', background: '#f4fbf8' }}>
            <p style={{ fontFamily: "'Press Start 2P',monospace", fontSize: '10px', margin: '0 0 6px' }}>RETAIL INVENTORY MANAGEMENT</p>
            <p style={{ margin: '0 0 4px' }}>Production REST API</p>
            <p style={{ margin: '0 0 6px', fontSize: '15px' }}>Transactional order processing, stock management, low-stock alerts, 41 automated test cases.</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="tag">FastAPI</span><span className="tag">PostgreSQL</span><span className="tag">TDD</span>
            </div>
            <a className="btn" href="https://github.com/aaryaa135/retail-inventory" target="_blank" rel="noopener noreferrer">GITHUB →</a>
          </div>
        </div>
      </div>

      <div className="resume-download" style={{ marginTop: '24px', textAlign: 'center', paddingTop: '16px', borderTop: '2px dashed #4a2e4a' }}>
        <button className="btn" onClick={handleDownload} style={{ fontSize: '11px', padding: '12px 20px' }}>
          DOWNLOAD RESUME (PDF)
        </button>
        <p style={{ margin: '10px 0 0', color: '#8a6a8a', fontSize: '14px' }}>Opens PDF for printing/saving</p>
      </div>
    </div>
  );
}