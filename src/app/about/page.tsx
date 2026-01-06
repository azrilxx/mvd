import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
	return (
		<SiteShell>
			<div className="space-y-10">
				{/* Intro */}
				<section className="space-y-3">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
						About Muvon Digital
					</h1>
					<div className="space-y-3 text-slate-300 text-sm sm:text-base max-w-3xl">
						<p>
							Muvon Digital is the software development arm of Muvon Energy. I build software products for industrial trading and education.
						</p>
						<p>
							My background is in manufacturing and trading, with experience across steel, energy, construction, and finance. That experience led me to start Muvon Energy as a trading and consultancy business. Muvon Digital is where I design, build, and operate the software products that come out of those real-world problems.
						</p>
						<p>
							The focus is straightforward. Build practical tools that solve operational issues, not abstract technology demos.
						</p>
					</div>
				</section>

				{/* Why I'm doing this */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">Why I'm doing this</h2>
					<div className="space-y-3 text-slate-300 text-sm sm:text-base max-w-3xl">
						<p>
							Working in manufacturing and trading, I kept running into the same problems. Pricing and quotations taking too long. Manual extraction from RFQs and technical documents. Supplier matching done in spreadsheets and emails.
						</p>
						<p>
							Instead of working around these issues, I started building software to address them directly.
						</p>
						<p>
							I keep things simple. If a system is hard to understand or use, it usually means it was built without enough thought. The goal is to create tools that fit how people actually work, not force new workflows for the sake of technology.
						</p>
						<p>
							This work is grounded in real usage and real constraints. The products are actively developed and refined through practical use cases.
						</p>
					</div>
				</section>

				{/* How I work */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">How I work</h2>
					<ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
						<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
							Focused, solo development
						</li>
						<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
							Practical, iteration driven
						</li>
						<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
							Built around real workflows
						</li>
					</ul>
				</section>

				{/* What I'm building */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">What I'm building</h2>
					<div className="space-y-4 max-w-3xl">
						<div className="rounded-md border border-slate-800 bg-slate-900/60 px-4 py-3">
							<h3 className="font-semibold text-slate-100 mb-2">SmartMetal</h3>
							<p className="text-sm text-slate-300">
								An industrial Configure Price Quote platform for steel traders and industrial supply companies. It automates RFQ parsing, material matching, pricing options, approval workflows, and quote generation.
							</p>
						</div>
						<div className="rounded-md border border-slate-800 bg-slate-900/60 px-4 py-3">
							<h3 className="font-semibold text-slate-100 mb-2">StudyNest</h3>
							<p className="text-sm text-slate-300">
								An education platform focused on structured learning and program delivery for Malaysian technical and academic institutions.
							</p>
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
