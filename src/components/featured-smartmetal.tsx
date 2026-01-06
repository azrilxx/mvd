import Link from 'next/link';

export default function FeaturedSmartMetal() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-8 md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            SmartMetal
          </h2>
          <span className="inline-block w-fit rounded bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Featured Product
          </span>
        </div>

        <div className="mt-6 space-y-4 text-indigo-50">
          <p className="text-lg leading-relaxed">
            AI-powered quote automation platform that transforms industrial quote processing from one week to one day. SmartMetal automatically extracts line items from RFQ documents with 96%+ accuracy, matches suppliers intelligently, and generates multi-option pricing scenarios in seconds.
          </p>
          <p className="leading-relaxed">
            Built for steel traders, fastener distributors, and industrial suppliers processing 100+ quotes per month with complex multi-supplier pricing requirements.
          </p>
        </div>

        <Link
          href="/smartmetal"
          className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-indigo-600 transition-transform hover:scale-105 hover:shadow-xl"
        >
          Learn More About SmartMetal →
        </Link>
      </div>
    </section>
  );
}
