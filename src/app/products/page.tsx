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
						Our Products
					</h1>
					<p className="text-slate-300 text-sm sm:text-base">
						Focused, AI-powered products for pricing and education operations.
					</p>
				</header>

				<section className="grid gap-6 md:grid-cols-2">
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<p className="text-xs uppercase tracking-wider text-indigo-300">
								For steel and industrial supply
							</p>
							<CardTitle className="text-xl sm:text-2xl text-slate-100">
								NSC Pricer
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-4">
							<p>
								AI-assisted pricing engine that centralises RFQs, specs, pricing
								rules and approvals.
							</p>
							<ul className="list-disc list-inside space-y-1">
								<li>RFQ workspace</li>
								<li>Catalogue &amp; spec matching</li>
								<li>Configurable pricing rules</li>
							</ul>
							<Button asChild>
								<Link href="/products/nsc-pricer">Explore NSC Pricer</Link>
							</Button>
						</CardContent>
					</Card>

					<Card className="bg-slate-900/40 border-slate-800">
						<CardHeader>
							<p className="text-xs uppercase tracking-wider text-indigo-300">
								For MARA &amp; MRSM institutions
							</p>
							<CardTitle className="text-xl sm:text-2xl text-slate-100">
								MRSM+
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-4">
							<p>Digital companion for learning and engagement.</p>
							<ul className="list-disc list-inside space-y-1">
								<li>Assignments</li>
								<li>Tracking</li>
								<li>Touchpoints</li>
							</ul>
							<Button variant="outline" className="border-slate-600" asChild>
								<Link href="/products/mrsmplus">View MRSM+</Link>
							</Button>
						</CardContent>
					</Card>
				</section>

				<section className="border-t border-slate-800 pt-6 flex items-center justify-between flex-col gap-3 sm:flex-row">
					<p className="text-slate-300 text-sm">
						Interested in a walkthrough or pilot?
					</p>
					<Button asChild>
						<a href="mailto:hello@muvondigital.my">Work with us</a>
					</Button>
				</section>
			</div>
		</SiteShell>
	);
}


