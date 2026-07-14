import { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cta } from "./Cta";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { name: "Work", to: "/projects" },
  { name: "Experience", to: "/experience" },
  { name: "About", to: "/about" },
  { name: "Résumé", to: "/resume" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-canvas/90 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-ink" aria-label="Home">
          Yuvraj Jha<span className="text-primary">.</span>
        </Link>

        {/* Center links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) => cn("nav-link", isActive && "font-medium text-ink")}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Cta to="/contact">Get in touch</Cta>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md border border-hairline text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-hairline bg-canvas lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-3 text-base",
                      isActive ? "bg-surface font-medium text-ink" : "text-ink-secondary"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Cta to="/contact" className="mt-2 w-full">
                Get in touch
              </Cta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
