import { Outlet } from "react-router-dom";

// components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-page">
      <div className="mx-auto flex h-screen max-w-[500px] flex-col overflow-hidden border-x border-text/10 bg-bg shadow-[0_0_40px_-8px] shadow-sky-500/15">
        <Header />
        <main className="flex min-h-0 flex-1 flex-col overflow-hidden bg-bg">
          <Banner />
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}