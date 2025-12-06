import { motion } from "motion/react";
import { TrendingUp, Clock, Star, Zap } from "lucide-react";

const metricas = [
  {
    icon: TrendingUp,
    valor: "+30",
    label: "Proyectos desarrollados",
    color: "from-cyan-400 to-cyan-600"
  },
  {
    icon: Clock,
    valor: "+70,000",
    label: "Horas hombre ahorradas en 2025",
    color: "from-[#C7A86A] to-[#b89960]"
  },
  {
    icon: Star,
    valor: "4.4/5",
    label: "Nota promedio - encuesta de satisfacción",
    color: "from-[#C7A86A] to-cyan-500"
  },
  {
    icon: Zap,
    valor: "70%",
    label: "Proyectos generan valor en los primeros 30 días",
    color: "from-cyan-500 to-blue-600"
  },
];

const sectores = [
  "Minería",
  "Banca",
  "Seguros",
  "Salud",
  "Consumo Masivo",
  "Pasarelas de Pago",
  "Servicios Profesionales"
];

const clienteLogos = [
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/Alicorp_logo.png", alt: "Alicorp" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/myg-logo.png", alt: "MYG" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/descarga.png", alt: "Cliente 3" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/HCI.jpg", alt: "HCI" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/vertix-logo.webp", alt: "Vertix" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/mycal_logo.jpg", alt: "MyCal" },
  { url: "http://businesstechdriver.com/wp-content/uploads/2025/04/cognita_group_logo.jpg", alt: "Cognita Group" },
];

export function Experiences() {
  return (
    <section id="experiencias" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full inline-block mb-6">
            Experiencias
          </span>
          <h2 className="text-[#08152E] text-5xl md:text-6xl mb-6">
            ¿Qué nos respalda<span className="text-[#C7A86A]">?</span>
          </h2>
        </motion.div>

        {/* Métricas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metricas.map((metrica, index) => {
              const Icon = metrica.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:border-[#C7A86A]/50"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${metrica.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl text-[#08152E] mb-2 group-hover:text-[#C7A86A] transition-colors">
                    {metrica.valor}
                  </div>
                  <p className="text-gray-600 text-sm leading-tight">
                    {metrica.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Sectores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 text-center"
        >
          <h3 className="text-[#08152E] text-xl md:text-2xl mb-6">
            Tenemos experiencia en los rubros:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {sectores.map((sector, index) => (
              <motion.div
                key={sector}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-full text-sm"
              >
                {sector}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hemos colaborado con */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-[#08152E] text-xl md:text-2xl">
            Hemos colaborado con:
          </h3>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="carousel-container">
            <div className="carousel-track">
              {/* First set of logos */}
              {clienteLogos.map((cliente, index) => (
                <img
                  key={`logo-1-${index}`}
                  src={cliente.url}
                  alt={cliente.alt}
                  className="carousel-logo"
                />
              ))}
              {/* Duplicate set for infinite loop */}
              {clienteLogos.map((cliente, index) => (
                <img
                  key={`logo-2-${index}`}
                  src={cliente.url}
                  alt={cliente.alt}
                  className="carousel-logo"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .carousel-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }

        .carousel-track {
          display: flex;
          width: max-content;
          animation: scroll-carousel 40s linear infinite;
        }

        .carousel-logo {
          height: 60px;
          margin: 0 80px;
          object-fit: contain;
          max-width: 150px;
          filter: grayscale(100%) brightness(0.7) contrast(1.2);
          mix-blend-mode: multiply;
          transition: filter 0.3s ease, transform 0.3s ease, mix-blend-mode 0.3s ease;
        }

        .carousel-logo:hover {
          filter: grayscale(0%) brightness(1) contrast(1);
          mix-blend-mode: normal;
          transform: scale(1.05);
        }

        @keyframes scroll-carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-container:hover .carousel-track {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .carousel-logo {
            height: 50px;
            margin: 0 40px;
            max-width: 120px;
          }
        }
      `}</style>
    </section>
  );
}