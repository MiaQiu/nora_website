import { motion } from "framer-motion";

export default function ParentingSupportSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-warm/30 to-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Parenting is hard.{" "}
          <span className="text-gradient-primary">
            Asking for help should not be.
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-charcoal/70 font-medium mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Confident Parenting, On Demand
        </motion.p>

        <motion.p
          className="text-base sm:text-lg lg:text-xl text-charcoal/60 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Nora's experts take the guesswork out of parenting. We develop a personalized, evidence-based parenting plan for your family's unique needs, giving you an expert team so you can raise amazing humans, the way you've always envisioned.
        </motion.p>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}
