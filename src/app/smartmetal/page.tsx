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
				{/* Header */}
				<section className="space-y-4 max-w-3xl">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
						SmartMetal
					</h1>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							Industrial pricing and decision workflow platform for material trading and procurement teams. Built to handle complex specifications, supplier inputs, pricing scenarios, approvals, and traceability, with structured outputs at the end of the process.
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
									Document processing
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Upload documents in any format. The system extracts line items, identifies materials, quantities, dimensions, and specifications automatically.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Material matching
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Match extracted items to supplier catalogs with confidence scoring and material origin tracking.
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
									Generate multiple pricing options simultaneously. Compare cheapest options, balanced mixes, and premium suppliers with different lead times.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Approval workflows
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Built in approval routing from sales through procurement to management, with audit trails for compliance.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Output generation
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Generate structured outputs with your branding, pricing options, and delivery timelines.
								</p>
							</CardContent>
						</Card>
						<Card className="glass-card">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">
									Multi supplier support
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-slate-300 leading-relaxed">
									Manage multiple supplier catalogs with origin tracking, regulatory compliance, and automated material matching.
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
							SmartMetal is currently in validation with NSC Sinergi, a Malaysian steel trader. The platform processes real world documents and handles multi supplier pricing scenarios.
						</p>
						<p>
							I am validating workflow integration and accuracy thresholds before full commercial deployment. Multi tenant architecture is deployed. Document processing is validated on multiple document types. Pricing engine is tested with multiple supplier scenarios.
						</p>
					</div>
				</section>

				{/* Contact */}
				<section className="space-y-4 max-w-3xl">
					<h2 className="text-2xl font-semibold tracking-tight text-slate-50">
						Interested in a demo or pilot?
					</h2>
					<div className="space-y-4 text-slate-300 text-base leading-relaxed">
						<p>
							If you would like to see how SmartMetal works or discuss a pilot, share a few details and I will get back to you.
						</p>
						<Button asChild className="mt-4">
							<Link href="/contact">Contact</Link>
						</Button>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}
