import { Link, NavLink } from "react-router-dom";
import { FiGlobe } from "react-icons/fi";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const navLinkClasses =
  "text-sm font-medium tracking-wide text-slate-300 hover:text-white transition";

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/40 transition group-hover:shadow-glow">
              <FiGlobe className="text-xl" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-tight">World Cuisines</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Discover, Cook, Enjoy
              </p>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <a
              className={navLinkClasses}
              href="https://en.wikipedia.org/wiki/Cuisine"
              target="_blank"
              rel="noreferrer"
            >
              Learn
            </a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        {children}
      </main>
      <footer className="border-t border-white/5 bg-slate-950/60 py-4 text-center text-xs text-muted">
        Crafted for culinary exploration · Stay curious & keep tasting
      </footer>
    </div>
  );
}

export default Layout;
