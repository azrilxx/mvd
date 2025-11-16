import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function NSCPricerPage() {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-50">
			<div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
				<nav>
					<Link
						href="/products"
						className="text-sm text-indigo-300 hover:text-indigo-200"
					>
						← Back to all products
					</Link>
				</nav>

				{/* Hero */}
				<header className="space-y-4">
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
						NSC Pricer
					</h1>
					<p className="text-slate-300 text-sm sm:text-base max-w-2xl">
						AI-powered pricing engine for steel and industrial supply companies.
						Centralises RFQs, clients, specs and pricing rules into a single
						workspace.
					</p>
					<div className="flex flex-wrap gap-2">
						<span className="text-xs rounded-full bg-indigo-900/40 border border-indigo-800 px-2.5 py-1 text-indigo-200">
							RFQ Management
						</span>
						<span className="text-xs rounded-full bg-indigo-900/40 border border-indigo-800 px-2.5 py-1 text-indigo-200">
							Pricing Automation
						</span>
						<span className="text-xs rounded-full bg-indigo-900/40 border border-indigo-800 px-2.5 py-1 text-indigo-200">
							AI Spec Matching
						</span>
					</div>
					<div className="flex gap-3 pt-2">
						<Button asChild>
							<a href="mailto:hello@muvondigital.my">Request a walkthrough</a>
						</Button>
						<Button variant="outline" className="border-slate-600" asChild>
							<Link href="/products">Back to products</Link>
						</Button>
					</div>
				</header>

				<div className="grid gap-6 md:grid-cols-2">
					{/* The problem */}
					<Card className="bg-slate-900/60 border-slate-700">
						<CardHeader>
							<CardTitle className="text-xl text-slate-100">
								The problem today
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-2">
							<ul className="list-disc list-inside space-y-1">
								<li>RFQs arrive via email, WhatsApp and spreadsheets</li>
								<li>Specs are inconsistent and hard to match to catalogue</li>
								<li>Pricing rules live in scattered Excel files</li>
								<li>Approvals get lost in long email threads</li>
							</ul>
						</CardContent>
					</Card>

					{/* How NSC Pricer helps */}
					<Card className="bg-slate-900/40 border-slate-800">
						<CardHeader>
							<CardTitle className="text-xl text-slate-100">
								How NSC Pricer helps
							</CardTitle>
						</CardHeader>
						<CardContent className="text-sm text-slate-300 space-y-2">
							<ol className="list-decimal list-inside space-y-1">
								<li>Capture RFQs in one place</li>
								<li>Suggest product specs from your catalogue</li>
								<li>Generate consistent pricing from rules and context</li>
								<li>Create clear price agreements with audit trails</li>
							</ol>
						</CardContent>
					</Card>
				</div>

				{/* Key capabilities */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">
						Key capabilities
					</h2>
					<ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							RFQ workspace
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Client &amp; KYC context
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Catalogue &amp; spec engine
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							AI-assisted spec suggestions
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Configurable pricing rules
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Approvals &amp; audit trail
						</li>
					</ul>
				</section>

				{/* Who it's for */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">Who it’s for</h2>
					<ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Steel &amp; piping traders
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Industrial supply companies
						</li>
						<li className="bg-slate-900/40 border border-slate-800 rounded-md px-3 py-2">
							Project procurement teams
						</li>
					</ul>
				</section>

				{/* Current status */}
				<section className="space-y-3">
					<h2 className="text-2xl font-semibold tracking-tight">
						Current status
					</h2>
					<ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
						<li className="bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2">
							Active development
						</li>
						<li className="bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2">
							Private pilot
						</li>
						<li className="bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2">
							<a
								href="mailto:hello@muvondigital.my"
								className="text-indigo-300 hover:text-indigo-200"
							>
								Email for a walkthrough
							</a>
						</li>
					</ul>
				</section>
			</div>
		</main>
	);
}


