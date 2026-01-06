import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
	return (
		<SiteShell>
			{/* Hero */}
			<section className="space-y-3">
				<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
					About Muvon Digital
				</h1>
				<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
					Muvon Digital is the technology and innovation arm of Muvon Energy, focused on building practical, AI-aware software for industry and education.
				</p>
				<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
					We combine domain knowledge from energy and industrial supply with modern engineering to build focused platforms like NSC Pricer and MRSM+.
				</p>
			</section>

			{/* Our story */}
			<section className="space-y-3">
				<h2 className="text-2xl font-semibold tracking-tight">Our story</h2>
				<div className="space-y-3 text-slate-300 text-sm sm:text-base max-w-3xl">
					<p>
						Muvon Digital was created to turn real operational challenges—pricing, RFQs, and student support—into structured, reliable digital tools.
					</p>
					<p>
						We prioritise clarity and fitness for purpose: solutions should be simple to understand, easy to operate and grounded in real-world workflows.
					</p>
				</div>
			</section>

			{/* How we work */}
			<section className="space-y-3">
				<h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
				<ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						Start from real problems, not features
					</li>
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						Small, focused teams and fast iterations
					</li>
					<li className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-2">
						Design for clarity, not complexity
					</li>
				</ul>
			</section>

			{/* What we’re building now */}
			<section className="space-y-3">
				<h2 className="text-2xl font-semibold tracking-tight">What we’re building now</h2>
				<ul className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
					<li className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
						NSC Pricer — pricing engine for steel and industrial supply
					</li>
					<li className="rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2">
						MRSM+ — digital companion for MRSM students and schools
					</li>
				</ul>
				<p className="text-slate-400 text-sm max-w-3xl">
					We develop with pilot partners and refine with real-world feedback.
				</p>
			</section>
		</SiteShell>
	);
}


