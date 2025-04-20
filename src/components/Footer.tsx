import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap size={24} />
              <span className="text-xl font-bold">Электрик Колпино</span>
            </div>
            <p className="text-gray-300">
              Профессиональные электромонтажные работы в Колпино и Колпинском районе Санкт-Петербурга.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/services/electrical-wiring" className="hover:text-primary transition-colors">
                  Электропроводка
                </Link>
              </li>
              <li>
                <Link to="/services/electrical-installation" className="hover:text-primary transition-colors">
                  Монтаж электрооборудования
                </Link>
              </li>
              <li>
                <Link to="/services/troubleshooting" className="hover:text-primary transition-colors">
                  Устранение неисправностей
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <p className="text-gray-300 mb-2">Вызов электрика в Колпино</p>
            <a href="tel:89500308830" className="text-xl font-bold text-primary block mb-2">
              8 950 030 88 30
            </a>
            <div className="flex gap-4 mt-4">
              <a href="https://wa.me/89500308830" className="text-gray-300 hover:text-primary" aria-label="WhatsApp">
                WhatsApp
              </a>
              <a href="https://t.me/89500308830" className="text-gray-300 hover:text-primary" aria-label="Telegram">
                Telegram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
