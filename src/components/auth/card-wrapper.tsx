import Link from "next/link";

import { cn } from "@/lib/utils";

import Container from "@/components/Container";
import AuthSocial from "@/components/auth/auth-social";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  subHeaderLabel: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
  disabled?: boolean;
  maxWidthFull?: boolean;
  className?: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  subHeaderLabel,
  backButtonHref,
  showSocial,
  disabled,
  maxWidthFull,
  className,
}: CardWrapperProps) => {
  return (
    <Container
      className={cn(
        "w-full min-h-screen flex items-center justify-center",
        disabled && "cursor-not-allowed opacity-50 z-0",
        className
      )}
    >
      <div
        className={cn(
          "w-full shadow-md rounded-md bg-border p-4 flex flex-col items-center justify-center gap-4",
          maxWidthFull ? "max-w-full" : "max-w-md"
        )}
      >
        {/* Form Title */}
        <div className="border-b border-accent w-full text-center pb-4">
          <h1 className="text-4xl text-foreground mb-1">{headerLabel}</h1>
          <h3 className="text-lg text-secondary-foreground">
            {subHeaderLabel}
          </h3>
        </div>
        <div
          className={cn(
            "w-full text-center pb-4",
            (showSocial || backButtonHref) && "border-b border-accent "
          )}
        >
          {children}
        </div>
        {showSocial && (
          <div className="w-full">
            <AuthSocial disabled={disabled} />
          </div>
        )}
        {backButtonHref && backButtonLabel && (
          <Link
            href={backButtonHref}
            className={cn(
              "underline text-secondary-foreground hover:text-primary-foreground text-sm ",
              disabled && "cursor-not-allowed opacity-50"
            )}
          >
            {backButtonLabel}
          </Link>
        )}
      </div>
    </Container>
  );
};

export default CardWrapper;
