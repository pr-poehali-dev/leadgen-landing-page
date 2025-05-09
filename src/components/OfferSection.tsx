
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OfferSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="radial-mask w-full h-full">
          <img 
            src="https://cdn.poehali.dev/files/4f506361-f203-4ae6-a9eb-1c2a7b3b3e22.png" 
            alt="Surveillance Camera" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Предложение с <span className="text-matrix-purple">гарантией результата</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Никаких рисков для вашего бизнеса. Мы гарантируем результаты договором 
            и возвращаем деньги, если не достигнем KPI.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <Card className="flex-1 neon-card animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">10 000 лидов</CardTitle>
              <CardDescription className="text-gray-400">
                Комплексное решение для вашего бизнеса
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-matrix-purple mb-6">
                52₽ <span className="text-lg text-gray-400">за лида</span>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Верифицированные контакты",
                  "Целевая аудитория по вашим критериям",
                  "Проработанный скрипт обращения",
                  "Многоуровневая фильтрация",
                  "Аналитика и отчетность",
                  "Интеграция с вашей CRM"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-matrix-purple">
                      <Icon name="Check" className="h-5 w-5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col space-y-4">
              <div className="w-full p-4 bg-matrix-purple/10 rounded-lg text-center">
                <span className="text-sm text-gray-400">Общая стоимость</span>
                <div className="text-2xl font-bold text-white">520 000 ₽</div>
              </div>
              <Button className="w-full bg-matrix-purple hover:bg-matrix-purple/90 text-white animate-pulse-glow">
                Получить предложение
              </Button>
            </CardFooter>
          </Card>
          
          <div className="flex-1 space-y-8 animate-fade-in-up">
            <div className="neon-card rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-3">
                  <Icon name="FileContract" className="h-6 w-6 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Договор с гарантией</h3>
                  <p className="text-gray-400">
                    Юридически обязывающий договор с четкими KPI и гарантией возврата средств при недостижении результатов
                  </p>
                </div>
              </div>
            </div>
            
            <div className="neon-card rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-3">
                  <Icon name="BadgeDollarSign" className="h-6 w-6 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Гарантированная выручка</h3>
                  <p className="text-gray-400">
                    Прогнозируемый доход в 5 000 000₽ по результатам обработки лидов при соблюдении рекомендаций
                  </p>
                </div>
              </div>
            </div>
            
            <div className="neon-card rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-3">
                  <Icon name="Clock" className="h-6 w-6 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Быстрый старт</h3>
                  <p className="text-gray-400">
                    Начало поставки лидов в течение 3 рабочих дней после подписания договора и внесения предоплаты
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
