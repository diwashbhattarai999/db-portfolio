import { Fira_Sans } from "next/font/google";

import Container from "@/components/Container";

const font = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Footer = () => {
  return (
    <footer className={font.className}>
      <div className="mt-8 border-t border-t-border shadow-sm">
        <Container className="flex items-center justify-between py-12 text-sm">
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
