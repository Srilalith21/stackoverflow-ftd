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
      <section className="flex justify-between">
          <LeftSideBar isopen={false} />
        <main>{children}</main>
        <RightSideBar />
      </section>
      <footer>
        <p>&copy; 2026 Made by Sri</p>
      </footer>
    </>
  );
}
