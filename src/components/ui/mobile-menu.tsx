import { NAV_LINKS } from "@/constants";
import Link from "next/link";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinkActive: string;
  handleNavLinkActive: (label: string) => void;
}

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  navLinkActive,
  handleNavLinkActive,
}: MobileMenuProps) => {
  return (
    <div
      className={`
        absolute top-0 right-0 border-l border-l-border backdrop-blur-lg bg-background opacity-[.98] py-16 px-8 h-screen w-[65%] md:hidden transition-all ease duration-500 z-20 shadow-md
        ${isMenuOpen ? "translate-x-0" : "translate-x-[100vw]"} 
    `}
    >
      <ul className="flex flex-col gap-4 items-center justify-center h-1/2">
        {NAV_LINKS.map((link) => {
          return (
            <li
              key={link.label + link.path}
              onClick={() => {
                handleNavLinkActive(link.label);
                setIsMenuOpen(false);
              }}
            >
              <Link
                href={link.path}
                className={`p-2 rounded-md hover:text-secondary-foreground transition ease-linear duration-300 ${
                  navLinkActive === link.label.toLowerCase() && "bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="p-2 text-center bg-accent border border-accent rounded-md hover:bg-muted duration-300 cursor-pointer">
        Resume
      </p>
    </div>
  );
};

export default MobileMenu;
