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
							I am a solo developer building software products. I use AI tools to work more efficiently, but the responsibility for design, implementation, and decisions stays with me. Tools help speed things up, but understanding the problem always comes first.
						</p>
					</div>
				</section>

				{/* What I do */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						What I do
					</h2>
					<div className="grid gap-6 sm:grid-cols-2">
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Full stack development
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I build web applications end to end. That includes frontend, backend, data models, and integrations. The focus is on getting real systems into use, not just prototypes or demos.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									AI assisted development
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I use AI tools to speed up debugging, refactoring, and exploration. They are part of the workflow, not a replacement for understanding the system or the problem being solved.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Product thinking
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I start by understanding the problem before writing code. That usually means talking to users, testing assumptions, and being willing to change direction when something does not work as expected.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Iterative delivery
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									I ship in small increments. Each version is functional, tested in real use, and improved based on feedback. The goal is steady progress and reduced risk, not big one off launches.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* How I work */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						How I work
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<div>
							<h3 className="font-semibold text-slate-100 mb-2">
								Understand the problem
							</h3>
							<p>
								I ask questions, listen carefully, and clarify what actually needs solving before writing code.
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-slate-100 mb-2">
								Build something small that works
							</h3>
							<p>
								I start focused and functional, then expand based on what I learn from real use.
							</p>
						</div>
						<div>
							<h3 className="font-semibold text-slate-100 mb-2">
								Improve continuously
							</h3>
							<p>
								I fix what breaks, refine what works, and add what is missing. Then I repeat the cycle.
							</p>
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
