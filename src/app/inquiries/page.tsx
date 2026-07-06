import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Inquiries — Aashrita Natesan",
};

export default function InquiriesPage() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />

      <main className="flex-1">
        <div className="mx-auto max-w-2xl px-6 py-14">
          <p className="text-[12px] text-foreground/50">
            $ inquiries --new
          </p>
          <h1 className="mt-3 text-[26px] font-medium tracking-tight">
            Inquiries
          </h1>
          <p className="mt-2 max-w-md font-serif text-[15px] leading-relaxed text-foreground/70">
            Roles, collaborations, or questions about any of the work here —
            send a note and it&apos;ll land straight in my inbox.
          </p>

          <InquiryForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
