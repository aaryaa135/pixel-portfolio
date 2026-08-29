import React from 'react';

export default function ResumeViewer() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aarya_Gupta_Resume.pdf';
    link.click();
  };

  return (
    <div className="resume-viewer">
      <div className="resume-toolbar">
        <span className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a' }}>
          RESUME.PDF
        </span>
        <div className="toolbar-actions">
          <button className="btn btn-sm" onClick={handleDownload} title="Download PDF">
            <span className="pixel-font" style={{ fontSize: '8px' }}>DOWNLOAD</span>
          </button>
          <a className="btn btn-sm" href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Open in new tab">
            <span className="pixel-font" style={{ fontSize: '8px' }}>POP OUT</span>
          </a>
        </div>
      </div>
      <div className="resume-content-scroll">
        <div className="resume-pdf-container" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          padding: '40px 20px',
          textAlign: 'center',
          background: '#fafafa',
          borderBottom: '2px solid var(--ink)'
        }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn btn-sm" onClick={handleDownload} style={{ padding: '10px 16px' }}>
              <span className="pixel-font" style={{ fontSize: '8px' }}>DOWNLOAD PDF</span>
            </button>
            <a className="btn btn-sm" href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 16px' }}>
              <span className="pixel-font" style={{ fontSize: '8px' }}>OPEN IN NEW TAB</span>
            </a>
          </div>
        </div>
        <div className="resume-details">
          <div className="resume-section">
            <h3 className="pixel-font" style={{ fontSize: '10px', color: '#4a2e4a', borderBottom: '2px solid #4a2e4a', paddingBottom: '4px', marginBottom: '12px' }}>
              EXPERIENCE
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <p style={{ margin: '0 0 4px', fontWeight: 'bold' }}>Full Stack AI Engineer — Algowire Technologies</p>
              <p style={{ margin: '0 0 4px', color: '#6a4a6a', fontSize: '15px' }}>Jun 2026 — Jul 2026</p>
              <p style={{ margin: '0' }}>Developed 3+ responsive React.js interfaces for a production restaurant web application and integrated frontend views with existing Ruby on Rails REST APIs. Debugged and resolved frontend-backend integration issues across key user flows, performing manual testing to validate each fix before deployment.</p>
            </div>
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
              HOBBIES & INTERESTS
            </h3>
            <p style={{ margin: '0 0 8px' }}>Trained in Odissi classical dance form — love expressing stories through movement and rhythm.</p>
            <p style={{ margin: '0' }}>Enjoy crafting handmade gifts — from personalized stationery to DIY decor — finding joy in the process of making things for others.</p>
          </div>

        </div>
      </div>
    </div>
  );
}