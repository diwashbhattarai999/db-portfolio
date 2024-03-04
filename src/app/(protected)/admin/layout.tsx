import { UserRole } from "@prisma/client";

import Sidebar from "@/components/admin/Sidebar";
import { RoleGate } from "@/components/auth/role-gate";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleGate allowedRole={UserRole.ADMIN}>
      <main className="min-h-screen md:flex md:gap-4 relative">
        <Sidebar />
        {children}
      </main>
    </RoleGate>
  );
}
