import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Алексей Соколов",
    role: "CEO, ПромТехСнаб",
    content:
      "Сотрудничество превзошло все наши ожидания. За 3 месяца получили 5400 лидов, конверсия в продажи составила 7%. Окупили вложения уже через 40 дней.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Марина Ковалёва",
    role: "Директор по маркетингу, АвтоСервисГрупп",
    content:
      "Скептически относились к предложениям по лидгену, но решили попробовать. Результат: стабильный поток клиентов и увеличение прибыли на 38% за квартал.",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Дмитрий Верхов",
    role: "Владелец, СтройМаркет",
    content:
      'Подписали договор на 10000 лидов, получаем партиями по 1000. Качество контактов на высоте, менеджеры довольны, что не приходится "пробивать стену" при общении.',
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Елена Миронова",
    role: "Руководитель отдела продаж, МедТехника",
    content:
      "Особенно ценим прозрачность в работе и детальную аналитику. Мы всегда видим, откуда пришел лид и как он взаимодействовал с нами. Это позволяет оптимизировать воронку.",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-matrix-purple/10 blur-[100px] z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-matrix-purple/10 blur-[100px] z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
            Что говорят <span className="text-matrix-purple">наши клиенты</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Более 150 компаний уже получили измеримые результаты благодаря
            нашему сервису лидогенерации
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="neon-card p-6 rounded-lg h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-matrix-purple/30">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 text-gray-300">
                      <Icon
                        name="Quote"
                        className="h-5 w-5 text-matrix-purple mb-2"
                      />
                      <p className="italic">{testimonial.content}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex text-matrix-purple">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" className="h-5 w-5" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-matrix-dark/80 border-matrix-purple text-matrix-purple hover:bg-matrix-purple/20" />
            <CarouselNext className="right-2 bg-matrix-dark/80 border-matrix-purple text-matrix-purple hover:bg-matrix-purple/20" />
          </Carousel>
        </div>

        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <div className="neon-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-matrix-purple mb-2">
              150+
            </div>
            <p className="text-gray-400">Довольных клиентов</p>
          </div>
          <div className="neon-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-matrix-purple mb-2">
              1M+
            </div>
            <p className="text-gray-400">Лидов сгенерировано</p>
          </div>
          <div className="neon-card rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-matrix-purple mb-2">
              98%
            </div>
            <p className="text-gray-400">Коэффициент удержания</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
