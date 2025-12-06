import { motion } from "motion/react";
import { Target, Users, Lightbulb, ArrowRight, Award } from "lucide-react";

export function AboutUs() {
  const valores = [
    {
      icon: Target,
      titulo: "Impacto Real",
      descripcion: "No vendemos tecnología por venderla. Implementamos soluciones que generan resultados medibles en tiempo y dinero."
    },
    {
      icon: Lightbulb,
      titulo: "Innovación Pragmática",
      descripcion: "Usamos lo último en tecnología, pero solo si agrega valor tangible a tu negocio. Sin hype, solo soluciones."
    },
    {
      icon: Users,
      titulo: "Mentalidad de Socio",
      descripcion: "Tu éxito es nuestro éxito. Trabajamos codo a codo con tus equipos para asegurar adopción y sostenibilidad."
    },
  ];

  const diferenciadores = [
    "Equipos multidisciplinarios: Tech + Negocio + Estrategia",
    "Metodologías ágiles adaptadas a cada cliente",
    "Foco en Quick Wins: resultados visibles en 30 días",
    "Acompañamiento post-implementación",
    "Conocimiento profundo de industrias reguladas",
  ];

  return (
    <div className="min-h-screen bg-[#08152E]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C7A86A]/30 rounded-full">
              <Award className="w-4 h-4 text-[#C7A86A]" />
              <span className="text-[#C7A86A] text-xs tracking-widest uppercase">Nosotros</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              Acerca de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] to-cyan-400">Business Tech Driver</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-6">
              Somos una <span className="text-[#C7A86A]">firma de transformación digital</span> que ayuda a empresas tradicionales a activar su Driver Mode: ese estado superior donde procesos, decisiones y equipos trabajan como un sistema digital ágil e inteligente.
            </p>

            <p className="text-white/60 text-base max-w-3xl leading-relaxed">
              No somos una consultora tradicional ni una software factory más. Somos el puente entre la <span className="text-cyan-400">estrategia de negocio</span> y la <span className="text-cyan-400">ejecución tecnológica</span>, con foco en resultados medibles y sostenibles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-3xl md:text-4xl mb-6">
                Nuestra Misión<span className="text-[#C7A86A]">.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Activar el <span className="text-[#C7A86A]">Driver Mode</span> en organizaciones que quieren liderar su industria mediante transformación digital real, no cosmética.
              </p>
              <p className="text-white/60 leading-relaxed">
                Creemos que toda empresa puede pasar de un modelo reactivo y manual a uno proactivo, automatizado y basado en datos. Y lo hacemos sin grandes consultorías de años, sino con implementaciones ágiles que generan valor desde el día uno.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#C7A86A]/10 to-cyan-500/10 rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                    <span className="text-white/80">Transformación real, no presentaciones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-white/80">Resultados medibles en 30-60 días</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                    <span className="text-white/80">Metodologías probadas en múltiples industrias</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-white/80">Equipos que trabajan dentro de tu organización</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              Nuestra Historia<span className="text-[#C7A86A]">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-white/70 leading-relaxed"
          >
            <p className="text-lg">
              <span className="text-[#C7A86A]">Business Tech Driver (BTD)</span> nació en <span className="text-cyan-400">2020</span> a partir de una coincidencia con dirección.
            </p>
            
            <p>
              Dos estudiantes de la Universidad de Lima, ya en sus últimos ciclos —una de Ingeniería de Sistemas y un estudiante de Ingeniería Industrial— coincidieron en un grupo de estudio de Business Intelligence. Allí descubrieron algo más que afinidad académica: compartían una <span className="text-[#C7A86A]">visión concreta</span> sobre el papel de la tecnología en el negocio.
            </p>

            <div className="bg-white/5 border-l-4 border-[#C7A86A] rounded-r-xl p-6 my-8">
              <p className="text-white/80 italic">
                Ambos tenían la misma convicción: la tecnología no debía limitarse a sostener operaciones, sino impulsar procesos más ordenados, decisiones más inteligentes y organizaciones capaces de escalar con criterio.
              </p>
            </div>

            <p>
              Esa unión entre <span className="text-cyan-400">lógica tecnológica</span> y <span className="text-cyan-400">pensamiento de procesos</span> se convirtió en el origen de BTD. Un espacio donde la tecnología se implementa con intención, no por tendencia. Un equipo que acompaña a las organizaciones a pasar del funcionamiento reactivo a un sistema integrado.
            </p>

            <p>
              Hoy, ya ingenieros titulados y con experiencia en distintos sectores, mantienen intacta esa misión: <span className="text-[#C7A86A]">activar el Driver Mode en las organizaciones</span>, integrando capacidades tecnológicas con una comprensión profunda del negocio para que cada área opere con coherencia y sentido.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-4">
              Nuestros Valores<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Lo que nos mueve y diferencia en cada proyecto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C7A86A] to-cyan-500 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white text-xl mb-3">{valor.titulo}</h3>
                  <p className="text-white/60 leading-relaxed">{valor.descripcion}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qué nos diferencia */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-white text-3xl md:text-4xl mb-4 text-center">
              ¿Qué nos diferencia<span className="text-[#C7A86A]">?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {diferenciadores.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-[#08152E] border border-cyan-400/20 rounded-xl p-5 hover:border-cyan-400/40 transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                <span className="text-white/80">{item}</span>
              </motion.div>
            ))}
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
              ¿Trabajamos juntos<span className="text-[#C7A86A]">?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Conversemos sobre cómo activar el Driver Mode en tu organización.
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