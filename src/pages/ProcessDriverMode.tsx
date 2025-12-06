import { motion } from "motion/react";
import { Workflow, CheckCircle, ArrowRight, Zap, Code2 } from "lucide-react";

export function ProcessDriverMode() {
  const beneficios = [
    "Automatización de flujos de trabajo repetitivos",
    "Reducción de errores operacionales hasta 70%",
    "Visibilidad en tiempo real de todos los procesos",
    "Integración fluida entre sistemas legacy y nuevos",
    "Escalabilidad sin aumentar complejidad",
  ];

  const caracteristicas = [
    {
      titulo: "Diseño de Procesos",
      descripcion: "Mapeamos y rediseñamos tus procesos para eliminar cuellos de botella y optimizar cada paso."
    },
    {
      titulo: "Automatización Inteligente",
      descripcion: "Implementamos RPA, workflows digitales y orquestación de sistemas para que tus procesos fluyan sin fricción."
    },
    {
      titulo: "Monitoreo Continuo",
      descripcion: "Dashboards en tiempo real para detectar problemas antes de que impacten tu operación."
    },
  ];

  return (
    <div className="min-h-screen bg-[#08152E]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-cyan-400/30 rounded-full">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs tracking-widest uppercase">Servicios</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] to-cyan-400">Driver Mode</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Diseñamos y automatizamos procesos digitales que eliminan fricción, reducen errores y hacen que tu operación avance con <span className="text-[#C7A86A]">claridad y velocidad</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-4">
              ¿Qué logramos<span className="text-[#C7A86A]">?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-cyan-400/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-4">
              Cómo lo hacemos<span className="text-[#C7A86A]">.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {caracteristicas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#08152E] border border-cyan-400/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl mb-3">{item.titulo}</h3>
                <p className="text-white/60 leading-relaxed">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-cyan-400/30 rounded-full">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs tracking-widest uppercase">Tecnología</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              Stack Tecnológico World-Class<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Utilizamos las mejores herramientas del mercado para garantizar escalabilidad, seguridad y mantenibilidad a largo plazo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Automatización de Procesos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Automatización de Procesos
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Power Automate / Zapier / Make:</span> Automatización low-code para integraciones rápidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Python + Selenium/Playwright:</span> Automatización RPA para procesos complejos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Apache Airflow:</span> Orquestación de workflows empresariales</span>
                </li>
              </ul>
            </motion.div>

            {/* Integración y APIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Integración y APIs
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">API REST / GraphQL:</span> Conectamos sistemas legacy con plataformas modernas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Azure Logic Apps:</span> Integración empresarial en la nube</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">MuleSoft / Boomi:</span> Para integraciones enterprise de alto volumen</span>
                </li>
              </ul>
            </motion.div>

            {/* Business Process Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Business Process Management
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Microsoft Power Platform:</span> Power Apps + Power Automate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Camunda / Bizagi:</span> Para procesos críticos que requieren trazabilidad total</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Monday.com / Asana API:</span> Gestión de workflows colaborativos</span>
                </li>
              </ul>
            </motion.div>

            {/* Monitoreo y Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                Monitoreo y Analytics
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Power BI / Tableau:</span> Dashboards en tiempo real del estado de procesos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Datadog / New Relic:</span> Monitoreo de performance y alertas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span><span className="text-white">Google Analytics 4:</span> Tracking de procesos digitales end-to-end</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              ¿Listo para optimizar tus procesos<span className="text-[#C7A86A]">?</span>
            </h2>
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