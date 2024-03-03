"use client";

import Link from "next/link";
import AuthSocial from "@/components/auth/auth-social";
import Container from "@/components/Container";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  subHeaderLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Container className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md shadow-md rounded-md bg-border p-4 flex flex-col items-center justify-center gap-4">
        {/* Form Title */}
        <div className="border-b border-accent w-full text-center pb-4">
          <h1 className="text-4xl text-foreground mb-1">{headerLabel}</h1>
          <h3 className="text-lg text-secondary-foreground">
            {subHeaderLabel}
          </h3>
        </div>
        <div className="border-b border-accent w-full text-center pb-4">
          {children}
        </div>
        {showSocial && (
          <div className="w-full">
            <AuthSocial />
          </div>
        )}
        <Link
          href={backButtonHref}
          className="underline text-secondary-foreground hover:text-primary-foreground text-sm "
        >
          {backButtonLabel}
        </Link>
      </div>
    </Container>
  );
};

export default CardWrapper;
