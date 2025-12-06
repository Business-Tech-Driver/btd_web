import { motion } from "motion/react";
import { Workflow, BarChart3, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const modes = [
  {
    icon: Workflow,
    title: "Process Driver Mode",
    subtitle: "En tus procesos",
    image: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzY0MzAxODA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Aplicativos empresariales personalizados",
      "Automatización RPA (registros, reportes, validaciones)",
      "IA aplicada a tareas operativas",
    ],
  },
  {
    icon: BarChart3,
    title: "Decision Driver Mode",
    subtitle: "En tus decisiones",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDI2NzgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Business Intelligence",
      "Business Analytics",
      "Modelos predictivos",
      "IA para soporte en decisiones",
    ],
  },
  {
    icon: Users,
    title: "People Driver Mode",
    subtitle: "En tus equipos",
    image: "https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTY0MjkyMDExN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: [
      "Capacitación",
      "Acompañamiento",
      "Upskilling",
      "Pilotos tecnológicos",
    ],
  },
];

export function DriverModes() {
  return (
    <section id="driver-mode" className="py-32 bg-[#08152E] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#C7A86A 1px, transparent 1px), linear-gradient(90deg, #C7A86A 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full inline-block mb-6">
            Servicios
          </span>
          <h2 className="text-white text-5xl md:text-6xl mb-6">
            ¿Cómo lo hacemos<span className="text-[#C7A86A]">?</span>
          </h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            Tres pilares de transformación que trabajan en conjunto
          </p>
        </motion.div>

        {/* Modes Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden h-full hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-[#C7A86A]/50 hover:shadow-2xl hover:shadow-[#C7A86A]/20">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08152E] via-[#08152E]/50 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-6">
                      <div className="w-14 h-14 rounded-full bg-[#C7A86A] flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Subtitle */}
                    <p className="text-[#C7A86A] text-xs tracking-widest uppercase mb-3">
                      {mode.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-white text-2xl mb-6">
                      {mode.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-gradient-to-r from-[#C7A86A] to-transparent mb-6" />

                    {/* Services List */}
                    <ul className="space-y-3 mb-6">
                      {mode.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-white/80 text-sm leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A86A] mt-2 flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ver más Button */}
                    <button className="group/btn flex items-center gap-2 text-[#C7A86A] hover:text-white transition-colors text-sm">
                      <span>Ver más</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}