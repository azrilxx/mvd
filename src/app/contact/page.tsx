"use client";

import { SiteShell } from "@/components/site-shell";

export default function ContactPage() {
	function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		// Simple demo handler
		// eslint-disable-next-line no-alert
		alert("This form is a demo. Please email hello@muvondigital.my");
	}

	return (
		<SiteShell>
			{/* Intro */}
			<section className="space-y-3">
				<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
				<p className="text-slate-300 text-sm sm:text-base max-w-3xl">
					If you'd like to discuss a product, a pilot, or a potential collaboration, share a few details and I'll get back to you.
				</p>
			</section>

			{/* Form */}
			<section aria-labelledby="contact-form" className="space-y-4">
				<h2 id="contact-form" className="sr-only">Contact form</h2>
				<form onSubmit={onSubmit} className="space-y-4 max-w-2xl">
					<div className="grid gap-4 sm:grid-cols-2">
						<label className="flex flex-col gap-1 text-sm">
							<span className="text-slate-200">Name</span>
							<input
								type="text"
								name="name"
								required
								className="rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 outline-none ring-0 focus:border-indigo-700"
							/>
						</label>
						<label className="flex flex-col gap-1 text-sm">
							<span className="text-slate-200">Email</span>
							<input
								type="email"
								name="email"
								required
								className="rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 outline-none ring-0 focus:border-indigo-700"
							/>
						</label>
					</div>
					<label className="flex flex-col gap-1 text-sm">
						<span className="text-slate-200">Organisation (optional)</span>
						<input
							type="text"
							name="organisation"
							className="rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 outline-none ring-0 focus:border-indigo-700"
						/>
					</label>
					<label className="flex flex-col gap-1 text-sm">
						<span className="text-slate-200">Message</span>
						<textarea
							name="message"
							required
							rows={5}
							className="rounded-md border border-slate-700 bg-slate-900/50 px-3 py-2 outline-none ring-0 focus:border-indigo-700"
						/>
					</label>
					<div>
						<button
							type="submit"
							className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none"
						>
							Send
						</button>
					</div>
				</form>

				<p className="text-sm text-slate-300">
					You can also email me directly at{" "}
					<a href="mailto:hello@muvondigital.my" className="text-indigo-300 hover:text-indigo-200">
						hello@muvondigital.my
					</a>
				</p>
			</section>
		</SiteShell>
	);
}


