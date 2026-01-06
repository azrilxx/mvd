export default function SmartMetalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            SmartMetal: AI-Powered Quote Automation for Industrial Traders
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Transform quote processing from one week to one day. Automate extraction, match suppliers instantly, and generate multi-option pricing in seconds.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">How It Works</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: 1,
                title: "Upload Documents",
                description: "Upload RFQ or MTO documents in any format: PDF, Excel, scanned images, or multi-page documents up to 100+ pages."
              },
              {
                step: 2,
                title: "AI Extraction",
                description: "Our AI engine extracts line items with 96%+ accuracy, identifying materials, quantities, dimensions, and specifications automatically."
              },
              {
                step: 3,
                title: "Smart Matching",
                description: "Automatically match extracted items to your supplier catalogs with confidence scoring and material origin tracking."
              },
              {
                step: 4,
                title: "Multi-Option Pricing",
                description: "Generate three pricing scenarios simultaneously: cheapest option, balanced mix, and premium suppliers with different lead times."
              },
              {
                step: 5,
                title: "Approval Workflow",
                description: "Built-in approval routing from sales through procurement to management, with immutable audit trails for compliance."
              },
              {
                step: 6,
                title: "Quote Generation",
                description: "Automatically generate professional PDF quotations with your branding, pricing options, and delivery timelines."
              }
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-lg border border-slate-800 bg-slate-900 p-6 transition-all hover:border-indigo-500"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Key Capabilities</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "96%+ Extraction Accuracy",
                description: "Advanced AI handles text PDFs, scanned documents, and Excel files with industry-leading accuracy on material specifications."
              },
              {
                title: "Multi-Supplier Intelligence",
                description: "Manage multiple supplier catalogs with origin tracking (China vs non-China), regulatory compliance, and automated material matching."
              },
              {
                title: "Three-Tier Pricing Engine",
                description: "Instantly compare cheapest, balanced, and premium pricing scenarios with different lead times and supplier mixes."
              },
              {
                title: "Approval & Audit Trails",
                description: "Configurable approval workflows with immutable audit logging, ensuring regulatory compliance and full traceability."
              },
              {
                title: "Multi-Tenant Security",
                description: "Enterprise-grade tenant isolation at the database level with row-level security, protecting sensitive pricing and supplier data."
              },
              {
                title: "Real-Time Analytics",
                description: "Track quote velocity, margin trends, supplier performance, and win/loss ratios across your entire pipeline."
              },
              {
                title: "Fast Turnaround",
                description: "Process 150+ line items in under 2 minutes. Complete full quotes in hours instead of days, freeing your team from manual work."
              }
            ].map((capability, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-800 bg-slate-950 p-6 transition-all hover:border-indigo-500 hover:shadow-lg"
              >
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="text-sm text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Stage */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Current Stage</h2>
          <div className="mt-8">
            <span className="inline-block rounded bg-yellow-600 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-slate-950">
              POC Validation Phase
            </span>
            <div className="mt-6 space-y-4 text-slate-300">
              <p className="text-lg leading-relaxed">
                SmartMetal is currently in POC validation with NSC Sinergi, a leading Malaysian steel trader. The platform has demonstrated 96%+ extraction accuracy on real-world MTO documents and successfully processes multi-supplier pricing scenarios. We are validating workflow integration and accuracy thresholds before full commercial deployment.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Key Milestones:</strong> Multi-tenant architecture deployed, AI extraction validated on 10+ document types, pricing engine tested with 3-supplier scenarios, approval workflows in production testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Platform Preview</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Document Upload & Extraction",
                subtitle: "AI-powered extraction interface",
                icon: "📄"
              },
              {
                title: "Multi-Option Pricing Dashboard",
                subtitle: "Compare supplier scenarios instantly",
                icon: "📊"
              },
              {
                title: "Approval Workflow",
                subtitle: "Streamlined sign-off with audit trails",
                icon: "✓"
              },
              {
                title: "Automated Quote Generation",
                subtitle: "Professional PDF quotations in seconds",
                icon: "📋"
              }
            ].map((preview, index) => (
              <div
                key={index}
                className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center"
              >
                <div className="mb-4 text-6xl opacity-50">{preview.icon}</div>
                <h3 className="text-xl font-semibold">{preview.title}</h3>
                <p className="mt-2 text-slate-400">{preview.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-12">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to Transform Your Quote Process?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Schedule a demo to see how SmartMetal can reduce your quote turnaround from one week to one day.
            </p>
            <a
              href="mailto:hello@muvondigital.my"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-indigo-600 transition-transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us for Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
