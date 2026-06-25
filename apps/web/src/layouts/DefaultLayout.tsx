import { Outlet } from "react-router-dom";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function DefaultLayout() {
  return (
    <div className="flex flex-col max-w-[500px] h-screen mx-auto border-x overflow-hidden">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}