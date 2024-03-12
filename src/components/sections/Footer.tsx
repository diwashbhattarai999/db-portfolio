import { Fira_Sans } from "next/font/google";

import Container from "@/components/Container";
import MotionDiv from "@/components/animation/motion-div";

const font = Fira_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Footer = () => {
  return (
    <footer className={font.className}>
      <div className="mt-8 border-t border-t-border shadow-sm">
        <Container className="flex max-sm:flex-col max-sm:gap-2 items-center justify-between py-12 text-xs md:text-sm">
          <MotionDiv delayOffset={0}>
            <p>All Rights Reserved &copy; 2024</p>
          </MotionDiv>
          <MotionDiv delayOffset={0.1}>
            <p>
              Developed By{" "}
              <span className="text-accent-secondary">Diwash Bhattarai</span>
            </p>
          </MotionDiv>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
