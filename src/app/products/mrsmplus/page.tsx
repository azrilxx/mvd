import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteShell } from "@/components/site-shell";

export default function MrsmPlusPage() {
	return (
		<SiteShell>
			<div className="space-y-10">
				{/* top back link */}
				<nav>
					<Link
						href="/products"
						className="text-sm text-indigo-300 hover:text-indigo-200"
					>
						← Back to all products
					</Link>
				</nav>

				{/* 3.1 Hero */}
				<header className="space-y-4">
					<div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                        <span className="rounded border border-slate-700/80 bg-slate-900/60 px-2 py-0.5">MRSM-focused</span>
                        <span className="rounded border border-slate-700/80 bg-slate-900/60 px-2 py-0.5">Digital learning companion</span>
                        <span className="rounded border border-slate-700/80 bg-slate-900/60 px-2 py-0.5">Web-based platform</span>
                    </div>
					<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
						MRSM+
					</h1>
					<p className="text-slate-300 text-base sm:text-lg max-w-3xl">
						A digital learning companion designed specifically for MRSM students and schools.
					</p>
					<p className="text-slate-300/90 text-sm sm:text-base max-w-3xl">
						MRSM+ brings together guided study support, structured learning activities and school-aligned features in one web-based platform. It is built to complement the existing MRSM ecosystem and help students stay on track academically while giving teachers and parents better visibility.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 pt-2">
						<Button asChild>
							<a href="mailto:hello@muvondigital.my?subject=MRSM%2B%20collaboration">Discuss collaboration</a>
						</Button>
						<Link
							href="/products"
							className="text-sm text-indigo-300 hover:text-indigo-200"
						>
							Back to all products
						</Link>
					</div>
				</header>

                {/* 3.2 The challenge */}
				<section aria-labelledby="challenge" className="space-y-4">
					<h2 id="challenge" className="text-2xl font-semibold tracking-tight">
						The challenge in supporting MRSM students at scale
					</h2>
					<div className="space-y-3 text-slate-300 text-sm sm:text-base max-w-4xl">
						<p>
							MRSM students balance demanding academic expectations, boarding school routines and co-curricular commitments.
						</p>
						<p>
							Teachers and counsellors have limited time to provide one-to-one support for every question or topic a student struggles with. Learning materials and support are often spread across different channels with limited integration.
						</p>
						<p className="text-slate-400">
							There is a need for a central, MRSM-aware digital companion that supports students consistently beyond classroom hours.
						</p>
					</div>
				</section>

                {/* 3.3 Our approach */}
				<section aria-labelledby="approach" className="space-y-4">
					<h2 id="approach" className="text-2xl font-semibold tracking-tight">
						Our approach with MRSM+
					</h2>
					<div className="space-y-3 text-slate-300 text-sm sm:text-base max-w-4xl">
						<p>
							MRSM+ is designed as a web-based companion that students can access on their own devices, with a focus on guided study rather than generic open-ended chat.
						</p>
						<p>
							It is aligned with the MRSM context: exam preparation, daily study routines and the rhythm of boarding school life.
						</p>
						<p>
							It complements teachers by helping students revise, practise and clarify questions between classes, extending academic support in a structured, reliable manner. The solution is developed with scalability in mind for multi-campus use.
						</p>
					</div>
				</section>

                {/* 3.4 Key capabilities */}
				<section aria-labelledby="capabilities" className="space-y-6">
					<h2 id="capabilities" className="text-2xl font-semibold tracking-tight">
						Key capabilities
					</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<Card className="bg-slate-900/60 border-slate-700">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">Guided study companion</CardTitle>
							</CardHeader>
							<CardContent className="text-sm text-slate-300">
								MRSM+ provides a structured space for students to ask academic questions, revise topics and receive step-by-step explanations in a guided manner.
							</CardContent>
						</Card>
						<Card className="bg-slate-900/60 border-slate-700">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">Exam and revision support</CardTitle>
							</CardHeader>
							<CardContent className="text-sm text-slate-300">
								The platform prioritises exam readiness, helping students focus on key subjects and topics that matter most during exam periods.
							</CardContent>
						</Card>
						<Card className="bg-slate-900/60 border-slate-700">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">MRSM-aware design</CardTitle>
							</CardHeader>
							<CardContent className="text-sm text-slate-300">
								MRSM+ is developed with boarding school life in mind, acknowledging prep times, co-curricular activities and the unique rhythm of MRSM campuses.
							</CardContent>
						</Card>
						<Card className="bg-slate-900/60 border-slate-700">
							<CardHeader>
								<CardTitle className="text-lg text-slate-100">Future teacher and parent visibility</CardTitle>
							</CardHeader>
							<CardContent className="text-sm text-slate-300">
								The roadmap includes role-based views for teachers and parents to better understand learning patterns and progress over time.
							</CardContent>
						</Card>
					</div>
				</section>

                {/* 3.5 Who it's for & status */}
				<section aria-labelledby="audience" className="space-y-4">
					<h2 id="audience" className="text-2xl font-semibold tracking-tight">
						Who MRSM+ is for
					</h2>
					<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
						MRSM+ is intended for the MRSM community and partners seeking structured, MRSM-aware academic support.
					</p>
					<ul className="list-disc list-inside space-y-1 text-slate-300 text-sm sm:text-base">
						<li>MRSM students who need structured, on-demand academic support</li>
						<li>MRSM teachers and school leaders exploring digital learning companions</li>
						<li>Education partners and policymakers evaluating scalable support models for residential schools</li>
					</ul>

					<div className="pt-2 space-y-2">
						<h3 className="text-lg font-medium text-slate-200">Current status</h3>
						<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
							MRSM+ is under active development as a focused pilot initiative. The platform is being refined with a small group of users before any wider rollout.
						</p>
						<div className="pt-1">
							<Button asChild>
								<a href="mailto:hello@muvondigital.my?subject=MRSM%2B%20collaboration">Discuss collaboration</a>
							</Button>
						</div>
					</div>
				</section>
			</div>
		</SiteShell>
	);
}

