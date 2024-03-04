"use client";

import { UserRole } from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";

import FormError from "@/components/ui/form-error";
import ErrorCard from "./error-card";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <ErrorCard backButtonHref="/login" backButtonLabel="Back to login">
        <FormError message="You do not have permission to view this content!" />
      </ErrorCard>
    );
  }
  return <>{children}</>;
};
