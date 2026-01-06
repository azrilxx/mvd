import { SiteShell } from "@/components/site-shell";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SmartMetalPage() {
	return (
		<SiteShell>
			<div className="space-y-16">
				{/* Hero */}
				<section className="space-y-4 max-w-3xl">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
						SmartMetal
					</h1>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Industrial pricing and decision workflow platform for material trading and procurement teams. Built to handle complex specifications, supplier inputs, pricing scenarios, approvals, and traceability. Outputs come at the end of the process, after decisions are reviewed and confirmed.
						</p>
					</div>
				</section>

				{/* How it works */}
				<section className="space-y-4">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						How it works
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Pricing workspace
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Start with a pricing case and a clear scope. Bring all line items, specifications, and assumptions into one place so the team is working from the same baseline.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Line item structuring
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Convert unstructured material lists into consistent line items. Capture quantities, dimensions, standards, and notes in a way that pricing teams can review and adjust.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Supplier matching
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Match each line item to supplier catalogs and available sources. Keep track of selected suppliers, material origin, and the basis for each match.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Pricing scenarios
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Build multiple pricing scenarios to compare trade offs. Adjust cost inputs, margin, lead time, and supplier mix to arrive at a pricing position you can defend.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Review and approvals
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Route decisions for review across commercial and management roles. Keep a record of what changed, who approved, and what basis was used for the final decision.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Final outputs
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Generate structured outputs once pricing is confirmed. Produce a consistent summary of pricing, lead time, and commercial terms for sharing with external parties.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Current stage */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						Current stage
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							SmartMetal is currently in validation with NSC Sinergi, a Malaysian steel trader. The platform is being tested on real commercial cases and multi supplier pricing scenarios.
						</p>
						<p>
							I am validating workflow fit and decision traceability before wider rollout. The focus is on consistency, reviewability, and making pricing decisions easier to execute as volume increases.
						</p>
					</div>
				</section>

				{/* CTA */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						Interested in a demo or pilot?
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							If you would like to see how SmartMetal works or discuss a pilot, share a few details and I will get back to you.
						</p>
						<div className="pt-2">
							<Button asChild>
								<Link href="/contact">Contact</Link>
							</Button>
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
