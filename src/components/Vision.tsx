import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";

export function Vision() {
  return (
    <section className="py-24 bg-[#08152E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#C7A86A]/10 border border-[#C7A86A]/30 flex items-center justify-center mx-auto">
            <Lightbulb className="w-8 h-8 text-[#C7A86A]" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-[#C7A86A] tracking-widest text-sm uppercase">
            Nuestra Visión
          </span>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl leading-relaxed"
        >
          <p className="text-white/90">
            "Creemos en una innovación que{" "}
            <span className="text-[#C7A86A]">empodera a las personas</span>:
            cuando la tecnología es simple y cercana al proceso real, cada
            equipo puede mejorar su trabajo y generar valor."
          </p>
        </motion.blockquote>

        {/* Decorative lines */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          <div className="h-px w-12 bg-[#C7A86A]" />
          <div className="w-2 h-2 bg-[#C7A86A] rounded-full" />
          <div className="h-px w-12 bg-[#C7A86A]" />
        </motion.div>
      </div>
    </section>
  );
}
