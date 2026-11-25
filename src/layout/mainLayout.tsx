import Nav from "@/components/Nav";
import LeftSideBar from "@/components/LeftSideBar";
import RightSideBar from "@/components/RightSideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section className="flex min-w-0 gap-4 lg:gap-6">
        <LeftSideBar />
        <main className="min-w-0 flex-1">
          {children}
        </main>
        <RightSideBar />
      </section>
      <footer>
        <p>&copy; 2026 Made by Sri</p>
      </footer>
    </>
  );
}
