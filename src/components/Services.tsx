import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Wrench, Lightbulb, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Venta de Luces LED",
      description: "Amplio catálogo de productos LED de las mejores marcas internacionales con garantía extendida.",
      features: [
        "Productos certificados",
        "Garantía de 3 años",
        "Asesoría técnica gratuita",
        "Precios competitivos"
      ],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Instalación Profesional",
      description: "Equipo técnico especializado en instalaciones LED para espacios comerciales e industriales.",
      features: [
        "Técnicos certificados",
        "Instalación en 24-48h",
        "Garantía de instalación",
        "Mantenimiento incluido"
      ],
      gradient: "from-secondary to-secondary-glow"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Asesoría Personalizada",
      description: "Diseñamos soluciones de iluminación a medida según las necesidades específicas de tu negocio.",
      features: [
        "Análisis del espacio",
        "Diseño 3D gratuito",
        "Cálculo de ahorro energético",
        "Seguimiento post-venta"
      ],
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium">Servicios Profesionales</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Servicios</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Integrales
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde la venta hasta la instalación y mantenimiento. Te acompañamos 
            en todo el proceso para garantizar los mejores resultados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glow-card group relative overflow-hidden">
              <CardContent className="p-8 h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-br group-hover:${service.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor 
            solución LED para tu negocio. Contactanos para una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero">
              Consulta Gratuita
            </button>
            <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300">
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;