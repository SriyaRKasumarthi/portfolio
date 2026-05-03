import { useEffect } from 'react';
import { resumeUrl } from '../config/siteConfig';

export default function ResumeRedirect() {
  useEffect(() => {
    window.location.replace(resumeUrl());
  }, []);
  return (
    <div className="page">
      <p className="page-deck" style={{ padding: '2rem' }}>
        Opening your resume…
      </p>
    </div>
  );
}
