
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-matrix-dark/90 border-t border-matrix-purple/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-matrix-purple mr-2">
                <Icon name="Zap" className="h-6 w-6" />
              </span>
              LeadTech
            </div>
            <p className="text-gray-400 mb-4">
              Передовые решения в области лидогенерации с гарантией результата для вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Команда</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Карьера</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Блог</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Наши услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Лидогенерация</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Телемаркетинг</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Маркетинговые исследования</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">CRM-интеграции</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-matrix-purple transition-colors">Консалтинг</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-matrix-purple/20 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 LeadTech. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-matrix-purple transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-matrix-purple transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-matrix-purple transition-colors">
              Правовая информация
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
