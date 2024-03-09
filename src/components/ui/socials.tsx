"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Contact } from "@prisma/client";

interface SocialProps {
  contacts: Contact[] | null;
}

const Social = ({ contacts }: SocialProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="-mt-12 flex gap-2 items-center justify-start">
      {/* <hr className="h-[1px] w-[10vw] bg-border opacity-60 rounded-lg" /> */}

      <ul className="flex gap-4">
        {contacts &&
          contacts.map((contact) => {
            return (
              <li key={contact.name}>
                <Link href={contact.url} target="_blank" rel="noreferrer">
                  <div
                    dangerouslySetInnerHTML={{ __html: contact.icon }}
                    className="svg p-2 bg-primary rounded-full hover:bg-accent hover:scale-110 duration-300"
                  ></div>
                </Link>
              </li>
            );
          })}
      </ul>

      {/* <hr className="h-[1px] w-full bg-border opacity-60 rounded-lg" /> */}
    </div>
  );
};

export default Social;
