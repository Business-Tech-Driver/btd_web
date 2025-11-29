import { motion } from "motion/react";
import { Layers, BarChart3, Users, ChevronRight } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "procesos",
      icon: Layers,
      title: "Procesos",
      description:
        "Automatización de procesos end-to-end. Eliminamos tareas manuales repetitivas y hacemos que tu operación fluya sin fricción.",
      color: "bg-[#C7A86A]",
      textColor: "text-[#C7A86A]",
      borderColor: "border-[#C7A86A]/30",
      bgHover: "hover:bg-[#C7A86A]/10",
    },
    {
      id: "decisiones",
      icon: BarChart3,
      title: "Decisiones",
      description:
        "Automatización de decisiones con IA y reglas de negocio. Modelos predictivos, analítica en tiempo real y decisiones inteligentes a escala.",
      color: "bg-transparent",
      textColor: "text-white",
      borderColor: "border-white/20",
      bgHover: "hover:bg-white/5",
    },
    {
      id: "equipos",
      icon: Users,
      title: "Equipos",
      description:
        "Formación, mentorías y cultura digital. Desarrollamos capacidades internas para que tu equipo lidere la transformación.",
      color: "bg-transparent",
      textColor: "text-white",
      borderColor: "border-white/20",
      bgHover: "hover:bg-white/5",
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-[#08152E]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl mb-4">Selecciona una solución:</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className={`
                  ${index === 0 ? service.color : "bg-transparent"}
                  border ${service.borderColor}
                  rounded-2xl p-8 cursor-pointer transition-all duration-300
                  ${index !== 0 ? service.bgHover : ""}
                  group
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    className={`w-10 h-10 ${
                      index === 0 ? "text-white" : service.textColor
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl mb-4 ${
                    index === 0 ? "text-white" : service.textColor
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 ${
                    index === 0 ? "text-white/90" : "text-white/70"
                  }`}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                  <span className="text-sm">Ver más</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
