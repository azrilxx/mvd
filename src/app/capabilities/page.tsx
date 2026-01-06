import { SiteShell } from "@/components/site-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CapabilitiesPage() {
	return (
		<SiteShell>
			<div className="space-y-16">
				{/* Hero */}
				<section className="space-y-4 max-w-3xl">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
						Capabilities
					</h1>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Muvon Digital exists to build and operate real software products.
							These capabilities describe how products like SmartMetal and StudyNest are actually designed, built, and improved.
							They are not offered as standalone services.
						</p>
					</div>
				</section>

				{/* What I am good at */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						What I am good at
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Problem definition and scope control
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I start from real operational problems and define clear boundaries before building anything. This keeps products focused, usable, and aligned with how work already happens on the ground.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Workflow and interface design
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I design workflows and interfaces that reflect real decision making, approvals, and handoffs. The goal is clarity and predictability, not feature density.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Full stack product engineering
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I design and build complete systems including front end, back end, data models, and infrastructure. Products are built to be maintainable and extensible over time.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Data structuring and system integration
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I work with messy, inconsistent data and turn it into structured systems. This includes parsing documents, normalising inputs, and integrating with existing databases and tools.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Automation where it actually helps
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Automation is applied only where it reduces manual effort or error. If automation adds complexity or hides important decisions, it is not used.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Iteration through real usage
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Products are refined through real usage, not theoretical requirements. Feedback comes from actual workflows, edge cases, and operational constraints.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* How products are built here */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						How products are built here
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Products at Muvon Digital are built in small, controlled increments.
							Each feature exists because it solves a specific problem observed in practice.
							There is no attempt to generalise prematurely or chase abstract frameworks.
						</p>
						<p>
							The focus is always on removing friction, improving clarity, and making work easier to repeat at scale.
						</p>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
