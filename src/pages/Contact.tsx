import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

const contactChannels = [
  {
    icon: Mail,
    label: "Email",
    value: "admin@businesstd.com",
    href: "mailto:admin@businesstd.com",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 964 232 734",
    href: "tel:+51964232734",
    color: "from-[#C7A86A] to-[#b89960]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+51 964 232 734",
    href: "https://wa.me/51964232734",
    color: "from-[#C7A86A] to-cyan-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Business Tech Driver",
    href: "https://pe.linkedin.com/company/business-tech-driver",
    color: "from-cyan-500 to-blue-600",
  },
];

export function Contact() {
  return (
    <div className="min-h-screen bg-[#08152E] flex items-center justify-center">
      <section className="py-32 w-full relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full inline-block mb-6">
              Contacto
            </span>
            <h2 className="text-white text-5xl md:text-6xl mb-6">
              Conversemos<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
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
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl hover:shadow-[#C7A86A]/10 transition-all duration-300 border border-white/10 hover:border-[#C7A86A]/50 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${channel.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <p className="text-white/50 text-sm mb-2 uppercase tracking-wide">
                        {channel.label}
                      </p>
                      <p className="text-white text-lg group-hover:text-[#C7A86A] transition-colors">
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
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-20 pt-12 border-t border-white/10"
          >
            <p className="text-white/60 text-lg mb-6">
              Activamos el <span className="text-[#C7A86A]">Driver Mode</span>
            </p>
            <p className="text-white text-3xl">
              Business Tech Driver S.A.C
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
