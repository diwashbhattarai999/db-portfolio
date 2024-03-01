import { ADMIN_LINKS } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-accent w-[240px] min-h-screen p-4">
      <Link
        href="/admin"
        className="font-bold text-3xl tracking-[-8px] text-foreground hover:text-primary-foreground"
      >
        D
        <span className="text-primary-foreground hover:text-foreground">B</span>
      </Link>
      <ul>
        {ADMIN_LINKS.map((link) => {
          return (
            <li key={link.id}>
              <a className="text-primary-foreground hover:text-foreground">
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
