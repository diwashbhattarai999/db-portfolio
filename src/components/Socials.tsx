import Link from "next/link";

import { CONNECT_LINKS } from "@/constants";

const Social = () => {
  return (
    <div className="mt-6 flex gap-2 items-center justify-start">
      <div className="h-1 w-2 bg-accent rounded-lg"></div>

      <ul className="flex gap-4">
        {CONNECT_LINKS.map((connectLink) => {
          return (
            <li key={connectLink.label} className="text-accent">
              <Link href={connectLink.href} target="_blank" rel="noreferrer">
                <connectLink.icon fillColor="#cacaca" />
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="h-1 w-2 bg-accent rounded-lg"></div>
    </div>
  );
};

export default Social;
