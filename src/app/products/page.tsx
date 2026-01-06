import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { SiteShell } from "@/components/site-shell";

export default function ProductsPage() {
	return (
		<SiteShell>
			<div className="space-y-10">
				<header className="space-y-2">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
						Products
					</h1>
					<p className="text-slate-300 text-sm sm:text-base">
						Two software products focused on industrial pricing and education.
					</p>
				</header>

				<div className="border-t border-slate-800 pt-6 space-y-8">
					<Card className="glass-card">
						<CardHeader>
							<p className="text-xs uppercase tracking-wider text-indigo-300 mb-2">
								FOR STEEL AND INDUSTRIAL SUPPLY
							</p>
							<CardTitle className="text-xl sm:text-2xl text-slate-100">
								SmartMetal
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-4">
							<p>
								Industrial Configure Price Quote platform for steel traders and industrial supply companies. It automates RFQ processing, supplier matching, and pricing option generation.
							</p>
							<ul className="list-disc list-inside space-y-1">
								<li>Extracts line items from RFQs and technical documents</li>
								<li>Matches materials to supplier catalogs</li>
								<li>Generates multiple pricing options for comparison</li>
							</ul>
							<Button asChild className="mt-4">
								<Link href="/smartmetal">Explore SmartMetal</Link>
							</Button>
						</CardContent>
					</Card>

					<Card className="glass-card">
						<CardHeader>
							<p className="text-xs uppercase tracking-wider text-indigo-300 mb-2">
								FOR MARA AND MRSM INSTITUTIONS
							</p>
							<CardTitle className="text-xl sm:text-2xl text-slate-100">
								StudyNest
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-4">
							<p>
								Learning platform for MARA and MRSM institutions. Designed to support assignments, progress tracking, and communication across students, teachers, and parents.
							</p>
							<ul className="list-disc list-inside space-y-1">
								<li>Digital assignments</li>
								<li>Progress tracking</li>
								<li>Students, teachers, and parents in one system</li>
							</ul>
							<Button variant="outline" className="border-slate-600 mt-4" asChild>
								<Link href="/products/mrsmplus">View StudyNest</Link>
							</Button>
						</CardContent>
					</Card>
				</div>

				<section className="border-t border-slate-800 pt-6">
					<p className="text-slate-300 text-sm mb-4">
						Interested in a demo or pilot?
					</p>
				</section>
			</div>
		</SiteShell>
	);
}
