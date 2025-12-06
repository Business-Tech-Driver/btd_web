import { motion } from "motion/react";
import { Zap, Target, Rocket, TrendingUp, ArrowRight, CheckCircle2, DollarSign, TrendingDown, Lightbulb } from "lucide-react";

export function DriverModePage() {
  const pilares = [
    {
      icon: Target,
      titulo: "Process Driver Mode",
      descripcion: "Procesos digitales fluidos, automatizados y sin fricción que impulsan tu operación.",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: TrendingUp,
      titulo: "Decision Driver Mode",
      descripcion: "Decisiones basadas en datos, analítica avanzada y modelos predictivos para resultados medibles.",
      color: "from-[#C7A86A] to-cyan-500"
    },
    {
      icon: Rocket,
      titulo: "People Driver Mode",
      descripcion: "Equipos empoderados con cultura digital, autonomía y dominio tecnológico sostenible.",
      color: "from-cyan-500 to-blue-600"
    },
  ];

  const beneficiosMVP = [
    {
      icon: CheckCircle2,
      titulo: "Validación Funcional",
      descripcion: "Verificamos que la solución resuelve el problema real, no el imaginado"
    },
    {
      icon: DollarSign,
      titulo: "Equilibrio de Costos",
      descripcion: "Identificamos el punto óptimo entre inversión y retorno antes de escalar"
    },
    {
      icon: TrendingDown,
      titulo: "Reducción de Riesgo",
      descripcion: "Invertimos en grande solo después de probar en pequeño"
    },
    {
      icon: Lightbulb,
      titulo: "Aprendizaje Continuo",
      descripcion: "Cada iteración genera insights que refinan la solución final"
    },
  ];

  return (
    <div className="min-h-screen bg-[#08152E]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#C7A86A]/20 via-cyan-500/20 to-transparent rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C7A86A]/30 rounded-full">
              <Zap className="w-4 h-4 text-[#C7A86A]" />
              <span className="text-[#C7A86A] text-xs tracking-widest uppercase">El Estado Superior</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              ¿Qué es el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] via-cyan-400 to-[#C7A86A]">Driver Mode</span>?
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              El Driver Mode es un <span className="text-[#C7A86A]">estado superior de operación</span> donde tu empresa deja de reaccionar y empieza a conducir su transformación digital con control, velocidad y propósito.
            </p>

            <p className="text-white/60 text-base max-w-2xl mx-auto leading-relaxed">
              No se trata solo de tecnología. Es un sistema integrado donde <span className="text-cyan-400">procesos</span>, <span className="text-cyan-400">decisiones</span> y <span className="text-cyan-400">equipos</span> trabajan en sincronía para generar resultados medibles y sostenibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ¿Por qué Driver Mode? */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              ¿Por qué necesitas activar el Driver Mode<span className="text-[#C7A86A]">?</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Las empresas que no activan el Driver Mode quedan atrapadas en operaciones manuales, decisiones lentas y equipos que no escalan. El Driver Mode te lleva de <span className="text-cyan-400">pasajero a conductor</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-white text-xl mb-3">Modo Pasajero</h3>
              <p className="text-white/60">Reactivo, manual, sin visibilidad. Siempre apagando incendios.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-white text-xl mb-3">Transición</h3>
              <p className="text-white/60">Adopción de tecnología, cambio de mindset, primeros quick wins.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center border-2 border-[#C7A86A]/30 rounded-2xl p-6"
            >
              <div className="text-6xl mb-4">🏎️</div>
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] to-cyan-400 text-xl mb-3">Driver Mode</h3>
              <p className="text-white/80">Proactivo, automatizado, data-driven. Control total de tu transformación.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Los 3 Pilares */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              Los 3 Pilares del Driver Mode<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Cada pilar se refuerza mutuamente para crear un sistema completo de transformación digital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${pilar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-3">{pilar.titulo}</h3>
                  <p className="text-white/60 leading-relaxed">{pilar.descripcion}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MVP Benefits */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              MVP: Diagnóstico Real Antes de Escalar<span className="text-[#C7A86A]">.</span>
            </h2>
          </motion.div>

          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              En BTD aplicamos la metodología <span className="text-[#C7A86A]">MVP (Minimum Viable Product)</span> como herramienta de diagnóstico estratégico. No se trata solo de lanzar rápido, sino de validar el equilibrio funcional y de costos antes de comprometer grandes inversiones.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <p className="text-white/80 mb-4">Un MVP bien diseñado nos permite:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>Identificar qué funcionalidades generan valor real vs. las que solo suenan bien</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>Validar la arquitectura técnica en condiciones reales de uso</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>Detectar fricciones operativas antes de que escalen</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>Calcular el ROI real, no proyectado</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>Ajustar el roadmap tecnológico basado en datos, no en supuestos</span>
                </li>
              </ul>
            </div>

            <p className="text-white/60 text-center italic">
              Nuestros MVPs no son prototipos descartables: son la primera versión productiva de un sistema que evoluciona de forma iterativa y controlada.
            </p>
          </motion.div>

          {/* Beneficios cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {beneficiosMVP.map((beneficio, index) => {
              const Icon = beneficio.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-[#C7A86A] to-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-3">{beneficio.titulo}</h3>
                  <p className="text-white/60 leading-relaxed">{beneficio.descripcion}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-[#C7A86A]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              ¿Listo para activar el Driver Mode<span className="text-[#C7A86A]">?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Te acompañamos en cada etapa de la transformación.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#C7A86A] rounded-lg bg-transparent text-white hover:bg-[#C7A86A]/10 hover:shadow-lg hover:shadow-[#C7A86A]/20 transition-all duration-300 group"
            >
              <span className="tracking-wide">Conversemos</span>
              <ArrowRight className="w-5 h-5 text-[#C7A86A] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}