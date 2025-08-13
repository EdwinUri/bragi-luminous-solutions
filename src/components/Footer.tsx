import { Zap, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
  ];

  const products = [
    { name: "Tiras LED", href: "#productos" },
    { name: "Paneles LED", href: "#productos" },
    { name: "Lámparas Decorativas", href: "#productos" },
    { name: "Iluminación Exterior", href: "#productos" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary pulse-glow" />
                <div className="absolute inset-0 w-8 h-8 text-secondary animate-pulse opacity-50">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bragi
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Especialistas en soluciones de iluminación LED para negocios. 
              Transformamos espacios con tecnología de vanguardia y diseño innovador.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-muted hover:bg-primary rounded-lg text-muted-foreground hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Productos
            </h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {product.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contacto
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="font-medium">Teléfono:</span><br />
                +52 55 1234 5678
              </p>
              <p>
                <span className="font-medium">Email:</span><br />
                contacto@bragi.com
              </p>
              <p>
                <span className="font-medium">Ubicación:</span><br />
                Ciudad de México, México
              </p>
              <p>
                <span className="font-medium">Horarios:</span><br />
                Lun - Vie: 9:00 - 18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Bragi. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Garantías
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated LED strip at bottom */}
      <div className="led-strip" />
    </footer>
  );
};

export default Footer;