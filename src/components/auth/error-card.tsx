"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

import Button from "@/components/ui/Button";
import Container from "@/components/Container";
import MotionDiv from "@/components/animation/motion-div";

interface ErrorCardProps {
  backButtonLabel: string;
  backButtonHref: string;
  logout?: boolean;
  children?: React.ReactNode;
}

const ErrorCard = ({
  backButtonHref,
  backButtonLabel,
  logout,
  children,
}: ErrorCardProps) => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <Container>
      <section className="flex h-[calc(100vh_-_90px)] w-full flex-col items-center justify-center gap-4 text-center">
        <MotionDiv delayOffset={0}>
          <h2 className="text-4xl">Oops! Something went wrong!</h2>
        </MotionDiv>
        <MotionDiv delayOffset={0.1}>
          <p>Could not find requested resource</p>
        </MotionDiv>
        <MotionDiv delayOffset={0.2}>
          <div>{children}</div>
        </MotionDiv>
        <MotionDiv delayOffset={0.2}>
          <div className="flex items-center justify-center gap-4 max-sm:flex-col">
            <Link href={backButtonHref}>
              <Button className="w-36">{backButtonLabel}</Button>
            </Link>
            {logout && (
              <Button onClick={handleLogout} className="w-28">
                Logout
              </Button>
            )}
          </div>
        </MotionDiv>
      </section>
    </Container>
  );
};

export default ErrorCard;
