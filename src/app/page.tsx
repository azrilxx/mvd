import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { SiteShell } from "@/components/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="max-w-6xl mx-auto">
        {/* hero + products */}
        <div className="grid gap-10 md:grid-cols-[3fr_2fr] items-start mb-16">
          {/* Hero text */}
          <section>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Building AI-powered products for{" "}
              <span className="text-indigo-300">
                industrial pricing
              </span>{" "}
              and{" "}
              <span className="text-indigo-300">
                education ecosystems
              </span>
            </h1>
            <p className="max-w-xl text-base text-slate-300 mb-8 leading-relaxed">
              Muvon Digital is the software development arm of Muvon Energy. We build focused software products like SmartMetal and StudyNest to solve real problems in industrial pricing and education.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0 shadow-lg shadow-indigo-500/25">
                <a href="/products">Explore products</a>
              </Button>
              <Button asChild variant="outline" className="border-slate-600 bg-slate-800/70 hover:bg-slate-700/80 text-slate-100">
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </section>

          {/* Product highlight card */}
          <section id="products" className="space-y-4">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-100">
                  SmartMetal
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-3">
                <p>
                  CPQ platform for steel traders and industrial supply companies. It automates commercial request processing, supplier matching, and pricing option generation.
                </p>
                <ul className="space-y-1.5 pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Extracts line items from commercial requests (RFQs, MTOs, BOQs, etc.) and technical documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Matches materials to supplier catalogs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Generates multiple pricing options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-slate-100">
                  StudyNest
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-3">
                <p>
                  Learning platform for MARA and MRSM schools. Designed to support assignments, progress tracking, and communication across students, teachers, and parents.
                </p>
                <ul className="space-y-1.5 pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Digital assignments and modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-400 mt-1.5">•</span>
                    <span>Students, teachers, and parents connected</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* simple contact anchor for now */}
      <footer
        id="contact"
        className="border-t border-slate-800 pt-6 text-xs text-slate-400 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
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
    </SiteShell>
  );
}
