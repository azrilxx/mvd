import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10">
        {/* top nav placeholder */}
        <header className="mb-10 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            Muvon<span className="text-indigo-400"> Digital</span>
          </span>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="/products" className="hover:text-white">
              Products
            </a>
            <a href="/" className="hover:text-white">
              Capabilities
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        {/* hero + products */}
        <div className="grid flex-1 gap-10 md:grid-cols-[3fr_2fr] items-center">
          {/* Hero text */}
          <section>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-300 mb-4">
              Muvon Energy · Digital Arm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Building AI-powered products for{" "}
              <span className="text-indigo-300">
                industrial pricing
              </span>{" "}
              and{" "}
              <span className="text-indigo-300">
                education ecosystems
              </span>
              .
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-slate-300 mb-6">
              Muvon Digital is the technology and innovation arm of
              Muvon Energy. We design and build focused platforms like
              NSC Pricer and MRSM+ that turn real-world operations into
              clean, usable software.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="/products">Explore our products</a>
              </Button>
              <Button variant="outline" className="border-slate-600" asChild>
                <a href="#contact">Talk to us</a>
              </Button>
            </div>
          </section>

          {/* Product highlight card */}
          <section id="products" className="space-y-4">
            <Card className="bg-slate-900/60 border-slate-700">
              <CardHeader>
                <CardTitle className="text-base text-slate-100">
                  NSC Pricer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-2">
                <p>
                  AI-assisted pricing engine for steel trading and
                  industrial supply.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Smart product and spec catalogue</li>
                  <li>Multi-supplier price comparison</li>
                  <li>RFQ and price agreement workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/40 border-slate-800">
              <CardHeader>
                <CardTitle className="text-base text-slate-100">
                  MRSM+
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-2">
                <p>
                  A modern learning and engagement platform designed
                  for MARA and MRSM institutions.
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Digital modules and assignments</li>
                  <li>Progress tracking and reporting</li>
                  <li>Student, teacher, and parent touchpoints</li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* simple contact anchor for now */}
        <footer
          id="contact"
          className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {new Date().getFullYear()} Muvon Digital. All rights reserved.</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:hello@muvondigital.my"
              className="text-indigo-300 hover:text-indigo-200"
            >
              hello@muvondigital.my
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
