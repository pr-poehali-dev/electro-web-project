import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricalWiring = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Электропроводка в Колпино</h1>
            <p className="text-xl max-w-3xl">
              Профессиональный монтаж и замена электропроводки в квартирах, домах и офисах Колпино и Колпинского района СПб
            </p>
          </div>
        </section>
        
        {/* Service description */}
        <section className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Монтаж и замена электропроводки</h2>
              <p className="text-lg mb-6">
                Выполняю весь комплекс работ по монтажу новой и замене старой электропроводки с соблюдением всех норм и требований безопасности.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Полная или частичная замена электропроводки</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Прокладка кабеля открытым и скрытым способом</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Установка распределительных коробок</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Разводка электросети по квартире/дому</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Штробление стен под проводку</span>
                </li>
              </ul>
              <a 
                href="tel:89500308830" 
                className="bg-primary text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Заказать услугу
              </a>
            </div>
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Монтаж электропроводки в Колпино" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Additional info */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Когда нужна замена электропроводки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Признаки износа проводки</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Частое срабатывание автоматов защиты</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Мигание света при включении приборов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Нагрев розеток и выключателей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Запах гари от проводки или электрических щитов</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Преимущества современной проводки</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Повышенная безопасность от возгораний</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Большая мощность для современных приборов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Возможность организации "умного дома"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Соответствие современным стандартам безопасности</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Примеры работ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/placeholder.svg" alt="Пример работы" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src="/placeholder.svg" alt="Пример работы" className="rounded-lg shadow-md w-full h-64 object-cover" />
            <img src="/placeholder.svg" alt="Пример работы" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужен электрик в Колпино?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Закажите услуги электрика прямо сейчас! Бесплатная консультация и выезд на объект.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:89500308830" 
                className="bg-white text-primary px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                8 950 030 88 30
              </a>
              <Link 
                to="/contacts" 
                className="bg-primary/20 text-white border border-white/30 px-6 py-3 rounded-md font-bold text-lg hover:bg-primary/30 transition-colors"
              >
                Контакты
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ElectricalWiring;
