import Link from "next/link";

import { Contact } from "@prisma/client";

import MotionDiv from "@/components/animation/motion-div";

interface SocialProps {
  contacts: Contact[] | null;
}

const Social = ({ contacts }: SocialProps) => {
  return (
    <MotionDiv
      delayOffset={0}
      className="-mt-12 flex gap-2 items-center justify-start"
    >
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
    </MotionDiv>
  );
};

export default Social;
