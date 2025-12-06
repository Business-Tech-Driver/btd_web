import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MessageSquare, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    text: "Hablamos el idioma del negocio",
  },
  {
    icon: Target,
    text: "Evitamos jerga innecesaria",
  },
  {
    icon: Users,
    text: "Somos cercanos",
  },
  {
    icon: Lightbulb,
    text: "Somos claros",
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-32 bg-white relative overflow-hidden">
      {/* Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A86A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NDIyOTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Business Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay with logo/pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08152E]/60 via-transparent to-transparent" />
              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C7A86A] to-cyan-400" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
            >
              <p className="text-[#08152E] text-xl">
                "Más que implementar, <span className="text-[#C7A86A]">acompañamos</span>"
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Label */}
            <div className="inline-block">
              <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full">
                Nosotros
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[#08152E] text-5xl md:text-6xl mb-6 leading-tight">
                ¿Quiénes somos<span className="text-[#C7A86A]">?</span>
              </h2>
            </div>

            {/* Main Statement */}
            <div className="space-y-4">
              <p className="text-[#08152E] text-2xl md:text-3xl leading-snug">
                Somos una firma <span className="text-[#C7A86A]">joven</span>, pero <span className="text-[#C7A86A]">seria</span>.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Pensamos como consultores estratégicos, no como proveedores técnicos.
              </p>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#C7A86A] to-cyan-400" />

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 hover:bg-[#C7A86A]/5 hover:border-[#C7A86A]/30 border border-transparent transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#C7A86A] mb-3" />
                      <p className="text-gray-700 leading-snug">
                        {value.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
