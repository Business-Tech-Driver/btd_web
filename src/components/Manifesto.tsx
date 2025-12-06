import { motion } from "motion/react";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import logo from "figma:asset/25e57b26889bb9c12400e5b5f722a69f298f4e2f.png";

export function Manifesto() {
  return (
    <section id="manifiesto" className="py-32 bg-[#F7F9FB] relative overflow-hidden">
      {/* Accent Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C7A86A]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1"
          >
            {/* Label */}
            <div className="inline-block">
              <span className="text-[#C7A86A] tracking-widest text-xs uppercase px-4 py-2 border border-[#C7A86A]/30 rounded-full">
                Filosofía
              </span>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-[#08152E] text-5xl md:text-6xl mb-6 leading-tight">
                Driver Mode
              </h2>
            </div>

            {/* Main Statement */}
            <div className="space-y-4">
              <p className="text-[#08152E] text-2xl md:text-3xl leading-snug">
                La transformación digital no es implementar herramientas.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed">
                Es activar un estado donde procesos, decisiones y equipos funcionan como un sistema.
              </p>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-[#C7A86A] to-cyan-400" />

            {/* Copy Principal */}
            <div className="space-y-4 pt-4">
              <p className="text-[#08152E] text-lg leading-relaxed">
                <span className="text-[#C7A86A]">Driver Mode</span> es eso: claridad operativa, criterio tecnológico y una manera de trabajar que sostiene el cambio.
              </p>
              <p className="text-gray-600/80 text-base leading-relaxed italic">
                Las empresas no llegan buscando software. Llegan buscando orden, velocidad y decisión.
              </p>
            </div>
          </motion.div>

          {/* Right: Transformation Module (replaces image) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 mt-24"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl p-10 min-h-[480px] flex items-center">
              {/* Accent Line Top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#C7A86A] to-cyan-400" />

              {/* Transformation Flow */}
              <div className="relative w-full">
                {/* Arrow Line - Horizontal */}
                <div className="absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 z-0">
                  <div className="relative w-full h-[3px] bg-gradient-to-r from-red-300/40 via-[#C7A86A]/60 to-[#C7A86A]">
                    <ArrowRight 
                      className="w-6 h-6 text-[#C7A86A] absolute right-0 top-1/2 -translate-y-1/2" 
                      strokeWidth={2.5} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center relative z-10">
                  
                  {/* Left Card: Clientes sin BTD */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-xl p-3 md:p-5 shadow-md border border-gray-200/80"
                  >
                    <div className="flex flex-col items-center gap-2 mb-3 md:mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-50 flex items-center justify-center">
                        <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-red-500" />
                      </div>
                      <h3 className="text-[#08152E] text-xs md:text-sm text-center leading-tight px-1">
                        Clientes sin BTD
                      </h3>
                    </div>
                    
                    <ul className="space-y-2 md:space-y-2.5">
                      {[
                        "Procesos manuales",
                        "Sistemas desconectados",
                        "Demoras en decisiones",
                        "Equipos con brecha digital"
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 md:gap-2 text-[#08152E]/70 text-xs md:text-sm leading-tight md:leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Center: BTD Logo - Círculo azul profundo con anillo giratorio CENTRADO */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col items-center gap-3 relative"
                    style={{ minHeight: '180px' }}
                  >
                    {/* Contenedor para centrar perfectamente el anillo */}
                    <div className="relative flex items-center justify-center" style={{ height: '140px' }}>
                      {/* Anillo Giratorio Exterior - Perfectamente CENTRADO */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute w-28 h-28 rounded-full border-[3px] border-transparent"
                        style={{
                          borderTopColor: "#C7A86A",
                          borderRightColor: "#C7A86A50",
                        }}
                      />

                      {/* Círculo azul profundo con borde dorado */}
                      <motion.div
                        animate={{ 
                          rotate: [-0.3, 0.3, -0.3],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-20 h-20 rounded-full bg-[#08152E] flex items-center justify-center relative z-10 border-[3px] border-[#C7A86A]/60"
                        style={{
                          boxShadow: "0 4px 20px rgba(8, 21, 46, 0.3), 0 0 40px rgba(199, 168, 106, 0.2), inset 0 2px 8px rgba(199, 168, 106, 0.1)"
                        }}
                      >
                        {/* Glow dorado interno */}
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          animate={{
                            boxShadow: [
                              "inset 0 0 15px rgba(199, 168, 106, 0.2)",
                              "inset 0 0 25px rgba(199, 168, 106, 0.4)",
                              "inset 0 0 15px rgba(199, 168, 106, 0.2)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <img 
                          src={logo} 
                          alt="BTD" 
                          className="w-10 h-10 object-contain relative z-10"
                        />
                      </motion.div>
                    </div>
                    
                    <span className="text-xs md:text-sm text-[#C7A86A] tracking-wide text-center leading-tight px-2">
                      Activa el<br />Driver Mode
                    </span>
                  </motion.div>

                  {/* Right Card: Clientes en Driver Mode */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-xl p-3 md:p-5 shadow-md border border-[#C7A86A]/40"
                  >
                    <div className="flex flex-col items-center gap-2 mb-3 md:mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#C7A86A]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#C7A86A]" />
                      </div>
                      <h3 className="text-[#08152E] text-xs md:text-sm text-center leading-tight px-1">
                        Clientes en Driver Mode
                      </h3>
                    </div>
                    
                    <ul className="space-y-2 md:space-y-2.5">
                      {[
                        "Ahorro de horas",
                        "Procesos ordenados",
                        "Decisiones claras",
                        "Equipos con madurez digital"
                      ].map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 md:gap-2 text-[#08152E]/80 text-xs md:text-sm leading-tight md:leading-relaxed"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#C7A86A] flex-shrink-0 mt-0.5" />
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}