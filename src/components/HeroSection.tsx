import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/Cta";
import HeroSearch from "@/components/HeroSearch";
import { profile } from "@/data/content";

const HeroSection = () => {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="hero-gradient relative overflow-hidden">
      <div className="container grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — display + CTA */}
        <div>
          <motion.p
            {...fade(0)}
            className="text-xs font-medium uppercase tracking-[0.16em] text-white/55"
          >
            {profile.name} — Software Engineer
          </motion.p>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 font-display text-[3.25rem] font-bold leading-[1.02] tracking-display text-white sm:text-6xl lg:text-[4.75rem]"
          >
            Design.
            <br />
            Build.
            <br />
            Verify.
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            style={{ fontFamily: "Sora, sans-serif", fontWeight: 300 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70 sm:text-[1.35rem] sm:leading-[1.5]"
          >
            Early Engineer at RedHold AI, owning the public REST API and Model Context Protocol
            channel of a platform serving 2,000+ users — where correctness is the product, and the
            proof is a build artifact.
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <Cta to="/projects">
              View my work
              <ArrowUpRight className="h-4 w-4" />
            </Cta>
            <Cta to="/contact" variant="ghost-dark">
              Get in touch
            </Cta>
          </motion.div>
        </div>

        {/* Right — functional search palette (nods to the search brand, showcases work) */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <HeroSearch />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
