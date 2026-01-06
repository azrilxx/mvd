import { SiteShell } from "@/components/site-shell";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AboutPage() {
	return (
		<SiteShell>
			<div className="space-y-16">
				{/* Intro */}
				<section className="space-y-4 max-w-3xl">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
						About Muvon Digital
					</h1>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
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
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						Why I'm doing this
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
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
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						How I work
					</h2>
					<div className="flex flex-wrap gap-3">
						<div className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-200">
							Focused, solo development
						</div>
						<div className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-200">
							Practical, iteration driven
						</div>
						<div className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-200">
							Built around real workflows
						</div>
					</div>
				</section>

				{/* What I'm building */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						What I'm building
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-xl text-slate-100">
									SmartMetal
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									An industrial Configure Price Quote platform for steel traders and industrial supply companies. It automates RFQ parsing, material matching, pricing options, approval workflows, and quote generation.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-xl text-slate-100">
									StudyNest
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									An education platform focused on structured learning and program delivery for Malaysian technical and academic institutions.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
