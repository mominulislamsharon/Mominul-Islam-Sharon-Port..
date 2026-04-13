export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>Dashboard Sidebar Placeholder</aside>
      <main>{children}</main>
    </div>
  );
}
