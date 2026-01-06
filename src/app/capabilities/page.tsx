import { SiteShell } from "@/components/site-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CapabilitiesPage() {
	return (
		<SiteShell>
			{/* Hero */}
			<section className="space-y-3">
				<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Capabilities</h1>
				<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
					From product discovery to AI-enabled delivery, Muvon Digital helps turn complex ideas into working software.
				</p>
			</section>

			{/* Core capability areas */}
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold tracking-tight">Core capability areas</h2>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">Product discovery &amp; strategy</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Clarifying problems, mapping stakeholders, and defining realistic scopes for digital initiatives.
						</CardContent>
					</Card>
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">UX, interface &amp; workflow design</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Designing clear user flows, low- and high-fidelity interfaces, and interaction patterns that fit how people actually work.
						</CardContent>
					</Card>
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">Full-stack engineering</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Building cloud-native applications using modern frameworks with maintainable back-end services.
						</CardContent>
					</Card>
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">Data &amp; integrations</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Integrating with APIs, working with relational databases, and structuring data for search and analysis.
						</CardContent>
					</Card>
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">AI &amp; automation integration</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Applying large language models and automation to augment decision-making in pricing and learning contexts.
						</CardContent>
					</Card>
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-base text-slate-100">Delivery &amp; iteration</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300">
							Shipping usable versions quickly, gathering feedback, and improving the product in measured steps.
						</CardContent>
					</Card>
				</div>
			</section>

			{/* How we engage */}
			<section className="space-y-4">
				<h2 className="text-2xl font-semibold tracking-tight">How we typically engage</h2>
				<ol className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						<span className="font-medium text-slate-200">Understand</span> — workshops and discovery sessions to frame the problem.
					</li>
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						<span className="font-medium text-slate-200">Prototype &amp; validate</span> — design and build a focused version to test with real users.
					</li>
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						<span className="font-medium text-slate-200">Build &amp; refine</span> — turn validated flows into production-ready software and evolve it over time.
					</li>
				</ol>
			</section>
		</SiteShell>
	);
}


