import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ClientWorkGate } from "@/components/ClientWorkGate";
import { demos } from "@/lib/demos";

export const metadata: Metadata = {
  title: "Client work — Aashrita Natesan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClientWorkPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-14">
          <ClientWorkGate entries={demos} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
