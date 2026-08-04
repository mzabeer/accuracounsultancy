import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyAccura } from "@/components/site/WhyAccura";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const description =
  "ACCURA Consultancy W.L.L. delivers strategic, financial and management advisory for startups, SMEs and enterprises. Insight. Strategy. Growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACCURA Consultancy W.L.L. | Strategic Business Advisory" },
      { name: "description", content: description },
      { property: "og:title", content: "ACCURA Consultancy W.L.L. | Building Businesses With Vision" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "ACCURA Consultancy W.L.L.",
          description,
          areaServed: "Bahrain",
          slogan: "Insight • Strategy • Growth",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Manama",
            addressCountry: "BH",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <LoadingScreen onDone={() => setReady(true)} />
      <div
        className={`transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
        aria-hidden={!ready}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyAccura />
          <Process />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </>
  );
}
