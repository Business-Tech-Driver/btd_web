import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@businesstd.com",
    href: "mailto:admin@businesstd.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 964 232 734",
    href: "tel:+51964232734",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+51 964 232 734",
    href: "https://wa.me/51964232734",
    color: "from-[#C7A86A] to-yellow-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Business Tech Driver",
    href: "https://pe.linkedin.com/company/business-tech-driver",
    color: "from-blue-600 to-blue-800",
  },
];

export function ContactNew() {
  return (
    <section id="contacto" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C7A86A]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full inline-block mb-6">
            Contacto
          </span>
          <h2 className="text-[#08152E] text-5xl md:text-6xl mb-6">
            Conversemos<span className="text-[#C7A86A]">.</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            ¿Listo para activar el <span className="text-[#C7A86A]">Driver Mode</span> en tu organización?
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={index}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-[#C7A86A]/30 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative flex items-start gap-5">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <p className="text-gray-500 text-sm mb-2 uppercase tracking-wide">
                      {channel.label}
                    </p>
                    <p className="text-[#08152E] text-lg group-hover:text-[#C7A86A] transition-colors">
                      {channel.value}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-[#C7A86A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-gray-600 text-lg mb-6">
            Activamos el <span className="text-[#C7A86A]">Driver Mode</span>
          </p>
          <p className="text-[#08152E] text-3xl">
            Business Tech Driver S.A.C
          </p>
        </motion.div>
      </div>
    </section>
  );
}
