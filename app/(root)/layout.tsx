import Cursor from "./components/cursor";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="overflow-hidden relative">
      <Cursor />
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
