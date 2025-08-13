import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo dentro de 24 horas.",
    });
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+52 55 1234 5678",
      action: "tel:+525512345678"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "contacto@bragi.com",
      action: "mailto:contacto@bragi.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "Ciudad de México, México",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horarios",
      content: "Lun - Vie: 9:00 - 18:00",
      action: "#"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-medium">Contáctanos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Solicita tu</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cotización Gratuita
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos listos para iluminar tu negocio. Contáctanos y recibe una 
            propuesta personalizada sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Formulario de Cotización
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+52 55 1234 5678"
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tipo de Negocio
                      </label>
                      <Input
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Restaurante, oficina, retail..."
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Descripción del Proyecto *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu proyecto de iluminación LED..."
                      rows={4}
                      required
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glow-card group">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <a 
                        href={info.action}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* WhatsApp CTA */}
            <Card className="glow-card bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-2">
                  ¿Necesitas respuesta inmediata?
                </h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Chatea con nosotros por WhatsApp
                </p>
                <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;