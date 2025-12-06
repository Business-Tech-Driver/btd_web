import { motion } from "motion/react";
import { BarChart3, CheckCircle, ArrowRight, TrendingUp, Database } from "lucide-react";

export function DecisionDriverMode() {
  const beneficios = [
    "Visibilidad completa de métricas clave del negocio",
    "Predicciones basadas en machine learning",
    "Alertas automáticas para acciones preventivas",
    "Democratización del acceso a datos en toda la organización",
    "ROI medible en decisiones estratégicas",
  ];

  const caracteristicas = [
    {
      titulo: "Analítica Avanzada",
      descripcion: "Implementamos dashboards, KPIs y reportería automatizada que convierten datos complejos en insights accionables."
    },
    {
      titulo: "Modelos Predictivos",
      descripcion: "Usamos IA y machine learning para anticipar escenarios, optimizar recursos y reducir riesgos."
    },
    {
      titulo: "Reglas de Negocio Inteligentes",
      descripcion: "Automatizamos decisiones operativas con lógica empresarial que aprende y se adapta."
    },
  ];

  return (
    <div className="min-h-screen bg-[#08152E]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C7A86A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C7A86A]/30 rounded-full">
              <BarChart3 className="w-4 h-4 text-[#C7A86A]" />
              <span className="text-[#C7A86A] text-xs tracking-widest uppercase">Servicios</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6">
              Decision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A86A] to-cyan-400">Driver Mode</span>
            </h1>
            
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Convertimos datos en decisiones <span className="text-[#C7A86A]">accionables</span> mediante analítica avanzada, reglas inteligentes y modelos predictivos que impulsan resultados reales.
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
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-[#C7A86A]/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[#C7A86A] flex-shrink-0 mt-0.5" />
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
                className="bg-[#08152E] border border-[#C7A86A]/20 rounded-2xl p-6 hover:border-[#C7A86A]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C7A86A] to-cyan-500 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
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
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#C7A86A]/30 rounded-full">
              <Database className="w-4 h-4 text-[#C7A86A]" />
              <span className="text-[#C7A86A] text-xs tracking-widest uppercase">Tecnología</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl mb-6">
              Plataformas de Datos e Inteligencia<span className="text-[#C7A86A]">.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Construimos infraestructuras de datos robustas con las herramientas más potentes del ecosistema analítico mundial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Warehousing & Lakehouse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                Data Warehousing & Lakehouse
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Snowflake / Google BigQuery:</span> Data warehouses cloud-native escalables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Azure Synapse Analytics:</span> Integración de data lake + data warehouse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Databricks:</span> Lakehouse unificado para analytics y ML</span>
                </li>
              </ul>
            </motion.div>

            {/* ETL/ELT & Data Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                ETL/ELT & Data Integration
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">dbt (data build tool):</span> Transformación de datos con control de versiones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Apache Spark:</span> Procesamiento distribuido de grandes volúmenes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Fivetran / Airbyte:</span> Conectores nativos para +300 fuentes de datos</span>
                </li>
              </ul>
            </motion.div>

            {/* Business Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                Business Intelligence
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Power BI:</span> Visualización enterprise con integración Microsoft 365</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Tableau:</span> Dashboards interactivos de grado analítico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Looker (Google):</span> BI embebido y gobernanza centralizada</span>
                </li>
              </ul>
            </motion.div>

            {/* Advanced Analytics & ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                Advanced Analytics & Machine Learning
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Python (Pandas, NumPy, Scikit-learn):</span> Stack estándar de data science</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Azure ML / AWS SageMaker:</span> Plataformas MLOps enterprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">TensorFlow / PyTorch:</span> Deep learning para casos avanzados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">H2O.ai / DataRobot:</span> AutoML para democratizar el ML</span>
                </li>
              </ul>
            </motion.div>

            {/* Data Governance (spans full width) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#C7A86A]/30 transition-all md:col-span-2"
            >
              <h3 className="text-white text-xl mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C7A86A]" />
                Data Governance
              </h3>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Microsoft Purview / Collibra:</span> Catálogo de datos y lineage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Apache Atlas:</span> Metadata management open-source</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C7A86A] mt-1">•</span>
                  <span><span className="text-white">Monte Carlo / Great Expectations:</span> Data quality monitoring</span>
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
              ¿Listo para tomar decisiones más inteligentes<span className="text-[#C7A86A]">?</span>
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