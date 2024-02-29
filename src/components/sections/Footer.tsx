import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer>
      <div className="mt-8 border-t border-t-border shadow-sm">
        <Container className="flex items-center justify-between py-12 text-xs">
          <p>All Rights Reserved &copy; 2024</p>
          <p>
            Developed By{" "}
            <span className="text-accent-secondary">Diwash Bhattarai</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
