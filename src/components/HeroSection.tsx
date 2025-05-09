
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background image - masked with radial gradient */}
      <div className="absolute inset-0 z-0">
        <div className="radial-mask w-full h-full">
          <img 
            src="https://cdn.poehali.dev/files/33b0738c-7661-40b6-bcb1-4a41c4a67966.png" 
            alt="Data Matrix" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </div>
      
      <div className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-4 py-1 px-4 rounded-full border border-matrix-purple/30 bg-matrix-dark/70 backdrop-blur-sm">
          <p className="text-sm font-code text-matrix-light tracking-wider">
            Эффективный лидген • Гарантированный результат
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-cyber tracking-tight glow-text">
          <span className="text-white">10 000 лидов.</span>{" "}
          <span className="text-matrix-purple">Гарантия контрактом.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light">
          Получите 10 000 потенциальных клиентов всего за <span className="text-matrix-purple font-medium">52₽</span> за штуку с юридической гарантией выручки в <span className="text-matrix-purple font-medium">5 000 000₽</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            size="lg" 
            className="bg-matrix-purple hover:bg-matrix-purple/90 text-white px-8 font-medium tracking-wider animate-pulse-glow"
          >
            Получить предложение
            <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-matrix-purple text-matrix-purple hover:bg-matrix-purple/10 font-medium"
          >
            Узнать больше
          </Button>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400 font-light">
          <div className="flex items-center">
            <Icon name="Shield" className="text-matrix-purple mr-2 h-5 w-5" />
            <span>Юридическая гарантия</span>
          </div>
          <div className="flex items-center">
            <Icon name="BadgeCheck" className="text-matrix-purple mr-2 h-5 w-5" />
            <span>Проверенное качество</span>
          </div>
          <div className="flex items-center">
            <Icon name="Timer" className="text-matrix-purple mr-2 h-5 w-5" />
            <span>Быстрый результат</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
