import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-white/5 bg-white/5 p-8 text-center shadow-lg shadow-black/40">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-2 text-3xl font-semibold text-white">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you are looking for might have been moved or removed. Head back to
        explore delicious cuisines instead.
      </p>
      <div className="mt-6 flex justify-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:shadow-glow"
        >
          <FiHome /> Go home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
