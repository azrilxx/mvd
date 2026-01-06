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
				{/* About Muvon Digital */}
				<section className="space-y-4 max-w-3xl">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
						About Muvon Digital
					</h1>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Muvon Digital is the software development arm of Muvon Energy. I build software products for industrial trading and education.
						</p>
						<p>
							My background is in manufacturing and trading, with experience across steel, energy, construction, and finance. That experience pushed me to start Muvon Energy as a trading and commercial execution business.
						</p>
						<p>
							Muvon Digital is where I design, build, and operate the software that comes out of those real world problems. The focus is straightforward. Build practical tools that remove operational friction.
						</p>
					</div>
				</section>

				{/* The problem I'm solving */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						The problem I'm solving
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Working in manufacturing and trading, I kept seeing the same issues repeat. Pricing decisions took too long. Data was messy. Matching items and suppliers was slow and inconsistent.
						</p>
						<p>
							Most teams end up relying on spreadsheets, emails, and memory. It works until volume increases, timelines tighten, or the people who know the process are not available.
						</p>
						<p>
							I started building software to make the process clearer and more repeatable. The goal is not to change how people work. It is to support how work already happens and make it easier to run.
						</p>
						<p>
							I keep things simple. If a system is hard to understand or use, it usually means I did not think through the workflow enough.
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
							Start from real problems, not features
						</div>
						<div className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-200">
							Build small, test early, iterate
						</div>
						<div className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-200">
							Design for clarity, not complexity
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
									Industrial pricing and decision workflow platform for material trading and procurement teams. Built to handle complex specifications, supplier inputs, pricing scenarios, approvals, and traceability, with structured outputs at the end of the process.
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
									Digital learning companion built for MRSM students and schools. Designed to support structured study, daily revision, and academic organisation in a simple, practical way.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
