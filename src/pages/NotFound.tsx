import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas p-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md rounded-xl border border-hairline bg-canvas p-10 text-center"
      >
        <p className="eyebrow">Error</p>
        <h1 className="mt-3 font-display text-7xl font-black tracking-display text-primary">404</h1>
        <h2 className="mt-2 font-display text-xl font-semibold text-ink">Page not found</h2>
        <p className="mx-auto mt-3 max-w-xs text-sm text-ink-secondary">{location.pathname}</p>
        <p className="mt-4 text-sm text-ink-secondary">
          This page doesn't exist, was moved, or the address was mistyped.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-[15px] font-medium text-white transition-colors hover:bg-algolia-cobalt"
          >
            <Home className="h-4 w-4" />
            Back home
          </Link>
          <Link
            to="/projects"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-hairline bg-canvas px-5 text-[15px] font-medium text-ink transition-colors hover:border-ink/30"
          >
            <ArrowLeft className="h-4 w-4" />
            See projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
