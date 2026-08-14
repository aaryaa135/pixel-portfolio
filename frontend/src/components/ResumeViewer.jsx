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
            <span className="pixel-font" style={{ fontSize: '8px' }}>��� DOWNLOAD</span>
          </button>
          <a className="btn btn-sm" href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Open in new tab">
            <span className="pixel-font" style={{ fontSize: '8px' }}>��� POP OUT</span>
          </a>
        </div>
      </div>
      <div className="resume-pdf-container">
        <iframe
          src="/resume.pdf"
          title="Aarya Gupta Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}