import LayoutWrapper from "./layout-wrapper";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative overflow-hidden">
      <LayoutWrapper>{children}</LayoutWrapper>
    </main>
  );
}
