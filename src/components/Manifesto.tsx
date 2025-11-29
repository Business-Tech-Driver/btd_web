import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export function Manifesto() {
  return (
    <section id="manifiesto" className="py-32 bg-[#08152E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Label */}
            <div className="inline-block">
              <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full">
                Manifiesto
              </span>
            </div>

            {/* Main Title */}
            <div>
              <h2 className="text-white text-5xl md:text-6xl mb-6 leading-tight">
                ¿Qué hacemos<span className="text-[#C7A86A]">?</span>
              </h2>
            </div>

            {/* Key Statement */}
            <div className="space-y-4 border-l-4 border-[#C7A86A] pl-6">
              <p className="text-white text-2xl md:text-3xl leading-snug">
                La transformación digital <span className="text-[#C7A86A]">no es</span> implementar herramientas.
              </p>
              <p className="text-white text-2xl md:text-3xl leading-snug">
                Es <span className="text-[#C7A86A]">diseñar sistemas</span> de trabajo mejores.
              </p>
            </div>

            {/* Philosophy */}
            <div className="space-y-3 pt-6">
              <p className="text-white/70 text-lg flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#C7A86A] flex-shrink-0 mt-1" />
                No implementamos tecnología por moda.
              </p>
              <p className="text-white/70 text-lg flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#C7A86A] flex-shrink-0 mt-1" />
                Implementamos tecnología al servicio de procesos, decisiones y personas.
              </p>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152E] via-transparent to-transparent z-10" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MTkwMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern Business Technology"
                className="w-full h-[500px] object-cover"
              />
              {/* Accent Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A86A] to-cyan-400" />
            </div>
          </motion.div>
        </div>

        {/* Before & After Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white text-2xl">
                Nuestros clientes llegan con
              </h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Procesos manuales",
                "Sistemas desconectados",
                "Poco control operacional",
                "Mucho esfuerzo repetitivo"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-white/70 text-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400/50 mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#C7A86A]/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-[#C7A86A]/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#C7A86A]/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-[#C7A86A]" />
              </div>
              <h3 className="text-white text-2xl">
                Se van con
              </h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Ahorro de horas",
                "Procesos ordenados",
                "Decisiones claras",
                "Operaciones más ágiles",
                "Mayor productividad real"
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-white/90 text-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#C7A86A] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
