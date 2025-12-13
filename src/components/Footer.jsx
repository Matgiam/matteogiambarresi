import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Matteo Giambarresi </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/matteo-giambarresi-926458298" target="_blank" rel="noopener noreferrer" className="linkedin">
            <img className="icon" src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1758565192/linkedin_w3qmmc.webp" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Matgiam" target="_blank" rel="noopener noreferrer" className="github">
            <img className="icon" src="https://res.cloudinary.com/dtpbxvstn/image/upload/v1758565930/github-mark-white_t0sgsu.png" alt="GitHub" />
          </a>
         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
