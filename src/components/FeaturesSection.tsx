
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Target",
    title: "Таргетированный поиск",
    description: "Находим только целевую аудиторию, заинтересованную в ваших услугах"
  },
  {
    icon: "Shield",
    title: "Договор с гарантией",
    description: "Юридическая защита ваших интересов с гарантией возврата при недостижении KPI"
  },
  {
    icon: "LineChart",
    title: "Аналитика конверсий",
    description: "Прозрачная отчетность по каждому этапу воронки продаж"
  },
  {
    icon: "Zap",
    title: "Быстрый запуск",
    description: "Начало работы и первые результаты в течение 72 часов после подписания"
  },
  {
    icon: "BadgeCheck",
    title: "Верифицированные данные",
    description: "Многоступенчатая проверка контактов для максимальной конверсии"
  },
  {
    icon: "Activity",
    title: "Масштабирование",
    description: "Гибкое увеличение объемов при успешных результатах"
  }
];

const FeatureCard = ({ icon, title, description, index }: { 
  icon: string; 
  title: string; 
  description: string;
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300 + index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);
  
  return (
    <div 
      className={`neon-card rounded-lg p-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-12 h-12 rounded-full bg-matrix-purple/10 flex items-center justify-center mb-4">
        <Icon name={icon} className="h-6 w-6 text-matrix-purple" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Как мы <span className="text-matrix-purple">получаем лиды</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Наша технология использует AI-алгоритмы для идентификации и привлечения 
            только заинтересованных клиентов с высокой вероятностью конверсии
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
