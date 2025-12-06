import { motion } from "motion/react";
import { Users, CheckCircle, ArrowRight, Sparkles, GraduationCap } from "lucide-react";

export function PeopleDriverMode() {
  const beneficios = [
    "Equipos empoderados con herramientas digitales",
    "Reducción de resistencia al cambio hasta 60%",
    "Cultura de mejora continua e innovación",
    "Autonomía en decisiones basadas en datos",
    "Retención de talento digital clave",
  ];

  const caracteristicas = [
    {
      titulo: "Capacitación Digital",
      descripcion: "Programas de upskilling y reskilling diseñados para que tus equipos dominen las nuevas tecnologías."
    },
    {
      titulo: "Gestión del Cambio",
      descripcion: "Acompañamiento estratégico para asegurar adopción y generar compromiso organizacional."
    },
    {
      titulo: "Cultura Data-Driven",
      descripcion: "Instalamos mindset y prácticas para que las decisiones se basen en datos, no en intuición."
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
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs tracking-widest uppercase">Servicios</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              People <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] to-cyan-400">Driver Mode</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Construimos una <span className="text-[#C7A86A]">cultura digital</span> con criterio, autonomía y dominio tecnológico para que el cambio sea sostenible y tu equipo sea protagonista.
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-[#C7A86A] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white text-xl mb-3">{item.titulo}</h3>
                <p className="text-white/60 leading-relaxed">{item.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologías de Capacitación */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-cyan-400/30 rounded-full">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs tracking-widest uppercase">Metodologías</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              Metodologías de Aprendizaje Aplicado<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              No hacemos capacitaciones teóricas de manual. Aplicamos metodologías probadas que garantizan adopción real y cambio de comportamiento sostenible.
            </p>
          </motion.div>

          <div className="space-y-6">
            {/* Learning by Doing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Learning by Doing <span className="text-cyan-400">(70-20-10)</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                <div className="bg-[#08152E] border border-cyan-400/20 rounded-lg p-4">
                  <p className="text-cyan-400 text-3xl mb-2">70%</p>
                  <p className="text-white/80">Práctica en proyectos reales del participante</p>
                </div>
                <div className="bg-[#08152E] border border-cyan-400/20 rounded-lg p-4">
                  <p className="text-cyan-400 text-3xl mb-2">20%</p>
                  <p className="text-white/80">Aprendizaje social (peer learning, mentorías)</p>
                </div>
                <div className="bg-[#08152E] border border-cyan-400/20 rounded-lg p-4">
                  <p className="text-cyan-400 text-3xl mb-2">10%</p>
                  <p className="text-white/80">Formación formal (workshops, e-learning)</p>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">
                Aplicamos el modelo 70-20-10 de desarrollo profesional, enfocando la capacitación en resolver problemas reales del día a día.
              </p>
            </motion.div>

            {/* Microlearning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Microlearning & Just-in-Time Training
              </h3>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Cápsulas de conocimiento de 5-15 minutos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Entregadas en el momento exacto que se necesitan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Formato multimedia adaptado al contexto (video, infografía, checklist)</span>
                </li>
              </ul>
              <p className="text-white/60 italic">
                Ideal para herramientas digitales donde el aprendizaje continuo es clave.
              </p>
            </motion.div>

            {/* Train the Trainer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Train the Trainer
              </h3>
              <p className="text-white/70 mb-4">
                Formamos champions internos que se convierten en multiplicadores del conocimiento:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Certificación de embajadores tecnológicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Toolkit de contenidos para replicar capacitaciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Soporte continuo para resolver dudas de segundo nivel</span>
                </li>
              </ul>
            </motion.div>

            {/* Blended Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Blended Learning
              </h3>
              <p className="text-white/70 mb-4">
                Combinamos lo mejor de ambos mundos:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>E-learning asincrónico para conceptos base</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Talleres presenciales/virtuales para práctica guiada</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Simulaciones y sandboxes para experimentación segura</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Evaluaciones prácticas, no exámenes de memoria</span>
                </div>
              </div>
            </motion.div>

            {/* Gamificación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Gamificación y Nudging
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Sistemas de puntos y reconocimiento para incentivar adopción</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Dashboards de progreso visible para crear accountability</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Challenges inter-equipos para generar competencia sana</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Nudges digitales (recordatorios inteligentes) para reforzar hábitos</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/30 transition-all"
            >
              <h3 className="text-white text-2xl mb-4">
                Mapeo de Skills y Personalización
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Diagnóstico inicial de nivel por rol y herramienta</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Rutas de aprendizaje personalizadas según gaps detectados</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Reassessment periódico para medir evolución</span>
                </div>
                <div className="flex items-start gap-2 text-white/70">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Certificaciones internas que reconocen niveles de dominio</span>
                </div>
              </div>
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
              ¿Listo para transformar tu cultura organizacional<span className="text-[#C7A86A]">?</span>
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