import { UserRole } from "@prisma/client";

import Sidebar from "@/components/admin/Sidebar";
import { RoleGate } from "@/components/auth/role-gate";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGate
      allowedRole={[UserRole.USER, UserRole.ADMIN]}
      backButtonHref="/"
      backButtonLabel="Go to Home"
    >
      <main className="min-h-screen md:flex md:gap-4 relative">{children}</main>
    </RoleGate>
  );
}
