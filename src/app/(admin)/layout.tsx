import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen flex gap-4">
      <Sidebar />
      {children}
    </main>
  );
}
