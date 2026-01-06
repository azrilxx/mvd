import type { ReactNode } from "react";
import { SiteNavbar } from "@/components/site-navbar";

interface SiteShellProps {
	children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
	return (
		<main className="min-h-screen bg-slate-950 text-slate-50">
			<SiteNavbar />
			<div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 space-y-10">
				{children}
			</div>
		</main>
	);
}


