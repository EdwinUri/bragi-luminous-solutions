import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Zap, Sun, Building } from "lucide-react";
import ledBulb from "@/assets/led-bulb-product.jpg";
import ledStrips from "@/assets/led-strips.jpg";
import ledPanels from "@/assets/led-panels.jpg";

const Products = () => {
  const products = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tiras LED",
      description: "Iluminación flexible y versátil para cualquier espacio. Perfectas para crear ambientes únicos y modernos.",
      image: ledStrips,
      features: ["RGB + Control remoto", "Adhesivo 3M", "Resistente al agua", "Hasta 50,000 horas"],
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Paneles LED",
      description: "Iluminación uniforme y profesional para oficinas y espacios comerciales de gran superficie.",
      image: ledPanels,
      features: ["Luz blanca ajustable", "Instalación empotrada", "Bajo consumo", "Diseño ultra delgado"],
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Lámparas LED Decorativas",
      description: "Elementos de iluminación que combinan funcionalidad y diseño para crear espacios únicos.",
      image: ledBulb,
      features: ["Múltiples diseños", "Dimeable", "Larga duración", "Colores personalizables"],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Iluminación Exterior",
      description: "Soluciones robustas para fachadas, jardines y espacios exteriores que resisten cualquier clima.",
      image: ledBulb,
      features: ["IP65 resistente", "Sensor de movimiento", "Solar disponible", "Control inteligente"],
    },
  ];

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium">Productos Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Catálogo de
            </span>
            <br />
            <span className="text-foreground">Productos LED</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos LED diseñados para transformar 
            cualquier espacio comercial con la mejor tecnología del mercado.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="glow-card group">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 p-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                    <div className="text-primary">
                      {product.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                    Ver Detalles
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button className="btn-hero">
            Ver Catálogo Completo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;