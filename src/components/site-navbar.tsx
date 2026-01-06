import Link from "next/link";

export function SiteNavbar() {
	return (
		<div className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
				<Link href="/" className="text-base font-semibold tracking-tight">
					Muvon<span className="text-indigo-400"> Digital</span>
				</Link>
				<nav className="hidden gap-6 sm:flex">
					<Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
						Home
					</Link>
					<Link href="/products" className="text-sm text-slate-300 hover:text-slate-50">
						Products
					</Link>
					<Link href="/capabilities" className="text-sm text-slate-300 hover:text-slate-50">
						Capabilities
					</Link>
					<Link href="/about" className="text-sm text-slate-300 hover:text-slate-50">
						About
					</Link>
					<Link href="/contact" className="text-sm text-slate-300 hover:text-slate-50">
						Contact
					</Link>
				</nav>
				{/* simple mobile menu: stacked links below using details/summary for minimal JS */}
				<details className="sm:hidden">
					<summary className="cursor-pointer text-sm text-slate-300 hover:text-slate-50">
						Menu
					</summary>
					<div className="mt-2 flex flex-col gap-2 rounded-md border border-slate-800 bg-slate-950 p-3">
						<Link href="/" className="text-sm text-slate-300 hover:text-slate-50">
							Home
						</Link>
						<Link href="/products" className="text-sm text-slate-300 hover:text-slate-50">
							Products
						</Link>
						<Link href="/capabilities" className="text-sm text-slate-300 hover:text-slate-50">
							Capabilities
						</Link>
						<Link href="/about" className="text-sm text-slate-300 hover:text-slate-50">
							About
						</Link>
						<Link href="/contact" className="text-sm text-slate-300 hover:text-slate-50">
							Contact
						</Link>
					</div>
				</details>
			</div>
		</div>
	);
}


