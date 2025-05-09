
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formState);
    alert("Запрос отправлен! Мы свяжемся с вами в ближайшее время.");
    setFormState({ name: "", email: "", phone: "", message: "" });
  };
  
  return (
    <section className="py-20 px-4 sm:px-6 relative" id="contact">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="radial-mask w-full h-full">
          <img 
            src="https://cdn.poehali.dev/files/187d313c-db18-490d-a9eb-d7767932a1e4.jpeg" 
            alt="Digital Eye" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-text">
              Готовы <span className="text-matrix-purple">масштабировать</span> ваш бизнес?
            </h2>
            <p className="text-gray-400 mb-8">
              Заполните форму, и наш специалист свяжется с вами в течение 2 часов, чтобы обсудить 
              детали сотрудничества и подготовить индивидуальное предложение.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-2 mt-1">
                  <Icon name="PhoneCall" className="h-5 w-5 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Телефон</h3>
                  <p className="text-gray-400">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-2 mt-1">
                  <Icon name="Mail" className="h-5 w-5 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-gray-400">info@leadtech.ru</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-matrix-purple/10 rounded-full p-2 mt-1">
                  <Icon name="MapPin" className="h-5 w-5 text-matrix-purple" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Адрес</h3>
                  <p className="text-gray-400">Москва, ул. Технологическая, 42, офис 301</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md animate-fade-in-up">
            <form onSubmit={handleSubmit} className="neon-card rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                Получить предложение
              </h3>
              
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Ваше имя"
                    className="bg-matrix-dark/60 border-matrix-purple/30 focus-visible:border-matrix-purple/70 focus-visible:ring-matrix-purple/20"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="bg-matrix-dark/60 border-matrix-purple/30 focus-visible:border-matrix-purple/70 focus-visible:ring-matrix-purple/20"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="Телефон"
                    className="bg-matrix-dark/60 border-matrix-purple/30 focus-visible:border-matrix-purple/70 focus-visible:ring-matrix-purple/20"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Ваше сообщение (опционально)"
                    className="bg-matrix-dark/60 border-matrix-purple/30 focus-visible:border-matrix-purple/70 focus-visible:ring-matrix-purple/20"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-matrix-purple hover:bg-matrix-purple/90 text-white animate-pulse-glow"
                >
                  Отправить запрос
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Нажимая на кнопку, вы соглашаетесь с нашей <a href="#" className="text-matrix-purple underline">политикой конфиденциальности</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
