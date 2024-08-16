import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="FooterDesign">
      <p>&copy; {year} Loyalty Squad ALL RIGHTS RESERVED</p>
      <a href="https://www.youtube.com/@LoyaltySquad2010" target="_blank">
        <i class="bi bi-youtube"></i>
      </a>
    </footer>
  );
}

export default Footer;
