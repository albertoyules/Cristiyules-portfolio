import { Instagram, Linkedin, Music, Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import profilePhoto from "@/assets/profile-photo.jpg";
import aboutPhoto from "@/assets/about-photo.jpg";
import photoFood from "@/assets/photo-food.jpg";
import photoBeauty from "@/assets/photo-beauty.jpg";
import photoLifestyle from "@/assets/photo-lifestyle.jpg";
import photoBusiness from "@/assets/photo-business.jpg";

const Index = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactar. Te responderé pronto.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <header className="gradient-autumn min-h-screen flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Name and Social Links */}
            <div className="text-center md:text-left space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground">
                Cristina <span className="text-primary">Yules</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Creadora de Contenido UGC
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover-lift shadow-soft"
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in-up">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-hover border-8 border-card">
                <img
                  src={profilePhoto}
                  alt="Cristina Yules - UGC Creator"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Sobre mí
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <ScrollReveal delay={100}>
              <div className="hover-zoom rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={aboutPhoto}
                  alt="Cristina Yules lifestyle portrait"
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Right: Bio */}
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Soy creadora de contenido UGC apasionada por conectar marcas con su público de forma auténtica. 
                  Mi experiencia combina creatividad, storytelling y estrategia digital.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Cada proyecto es una oportunidad para dar vida a historias únicas que resonan con las audiencias 
                  y generan resultados reales.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Mis vídeos
            </h2>
          </ScrollReveal>

          <div className="space-y-16">
            {/* Food Category */}
            <VideoCategory 
              title="Comida 🍽️" 
              videos={5}
              bgColor="bg-secondary"
            />

            {/* Lifestyle Category */}
            <VideoCategory 
              title="Lifestyle 🌿" 
              videos={5}
              bgColor="bg-muted"
            />

            {/* Business Category */}
            <VideoCategory 
              title="Business 💼" 
              videos={5}
              bgColor="bg-secondary"
            />

            {/* Beauty Category */}
            <VideoCategory 
              title="Beauty 💄" 
              videos={5}
              bgColor="bg-muted"
            />
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Fotos UGC
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              photoFood,
              photoBeauty,
              photoLifestyle,
              photoBusiness,
              photoFood,
              photoBeauty,
              photoLifestyle,
              photoBusiness
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-soft hover-zoom"
              >
                <img
                  src={photo}
                  alt={`UGC content ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 px-4 gradient-warm">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
              Marcas que han confiado en mí
            </h2>
          </ScrollReveal>

          <div className="bg-card rounded-3xl shadow-soft p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {["Sephora", "Zara", "L'Oréal", "H&M", "Mango", "Nike", "Adidas", "Stradivarius"].map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-smooth"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Escríbeme y hagamos crecer tu marca.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-card border-border"
                  required
                />
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-card border-border"
                  required
                />
              </div>
              <Input
                type="text"
                placeholder="Asunto"
                className="bg-card border-border"
                required
              />
              <Textarea
                placeholder="Tu mensaje"
                rows={6}
                className="bg-card border-border resize-none"
                required
              />
              <Button variant="cta" size="lg" className="w-full md:w-auto px-12" type="submit">
                <Mail className="mr-2 h-5 w-5" />
                Enviar mensaje
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 gradient-autumn border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground mb-4">
            © 2025 Cristina Yules. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Video Category Component
const VideoCategory = ({ title, videos, bgColor }: { title: string; videos: number; bgColor: string }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: videos }).map((_, i) => (
          <div
            key={i}
            className={`aspect-[9/16] rounded-xl ${bgColor} shadow-soft hover-lift overflow-hidden relative group cursor-pointer`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Play className="w-16 h-16 text-primary opacity-50 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
