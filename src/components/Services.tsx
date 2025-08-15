import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Zap, Store, MapPin } from "lucide-react";
import cncImage from "@/assets/cnc-cutting-service.jpg";
import ledImage from "@/assets/led-neon-signs.jpg";
import furnitureImage from "@/assets/commercial-furniture.jpg";
import signageImage from "@/assets/commercial-signage.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte CNC",
      description: "Fabricación de piezas y paneles a medida para mobiliario y señalética con precisión milimétrica.",
      image: cncImage,
      features: [
        "Corte de alta precisión",
        "Múltiples materiales disponibles",
        "Diseños personalizados",
        "Acabados profesionales"
      ]
    },
    {
      icon: Zap,
      title: "Letreros Neón LED",
      description: "Letreros LED personalizados para interior y exterior con alto brillo y bajo consumo energético.",
      image: ledImage,
      features: [
        "Opciones interior/exterior",
        "Colores personalizables",
        "Bajo consumo energético",
        "Larga durabilidad"
      ]
    },
    {
      icon: Store,
      title: "Mobiliario Comercial",
      description: "Diseño y producción de estantes comerciales y mobiliario para tiendas y mostradores.",
      image: furnitureImage,
      features: [
        "Diseños a medida",
        "Materiales de calidad",
        "Instalación incluida",
        "Garantía extendida"
      ]
    },
    {
      icon: MapPin,
      title: "Señalética Comercial",
      description: "Señalización direccional, informativa y de marca para espacios comerciales.",
      image: signageImage,
      features: [
        "Señalización direccional",
        "Diseño corporativo",
        "Materiales resistentes",
        "Fácil instalación"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-run font-black text-primary mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl font-century text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para potenciar la imagen de tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-run font-bold text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-century text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm font-century">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full font-century font-medium border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-lg p-8 brand-card">
          <h3 className="text-2xl md:text-3xl font-run font-bold text-primary mb-4">
            ¿Necesitas una solución personalizada?
          </h3>
          <p className="text-lg font-century text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para crear la solución perfecta para tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-hero"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Consulta Gratuita
            </Button>
            <Button 
              variant="outline"
              className="btn-secondary"
              onClick={() => window.open('https://wa.me/5216631014668', '_blank')}
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;