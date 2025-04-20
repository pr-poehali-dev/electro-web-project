import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ElectricalInstallation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Монтаж электрооборудования в Колпино</h1>
            <p className="text-xl max-w-3xl">
              Профессиональная установка розеток, выключателей, светильников и другого электрооборудования в Колпино и Колпинском районе
            </p>
          </div>
        </section>
        
        {/* Service description */}
        <section className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Установка электрооборудования</h2>
              <p className="text-lg mb-6">
                Выполняю профессиональный монтаж любого электрооборудования в квартирах, домах и офисах с соблюдением всех норм безопасности.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Установка розеток и выключателей</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Монтаж светильников, люстр, бра</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Установка и подключение электрощитов</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Монтаж систем теплого пола</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Установка и подключение бытовой техники</span>
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
                src="https://i.ibb.co/yB3ZcXp/electrical-installation.png" 
                alt="Монтаж электрооборудования в Колпино" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Installation types */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Виды монтажных работ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/nsdppCB/socket-installation.png" 
                  alt="Розетки и выключатели" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Розетки и выключатели</h3>
                <p className="text-gray-600">
                  Установка, замена и перенос розеток и выключателей любых типов, включая модели с защитой от детей, USB-портами и дистанционным управлением.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/kxKgFj3/lights-installation.png" 
                  alt="Светильники и люстры" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Светильники и люстры</h3>
                <p className="text-gray-600">
                  Монтаж и подключение люстр, светильников, бра, а также систем точечного и декоративного освещения, включая светодиодные ленты.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/4F1xkJq/electric-panel.png" 
                  alt="Электрощиты" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Электрощиты</h3>
                <p className="text-gray-600">
                  Установка, замена и модернизация электрощитов с автоматами защиты, УЗО, дифавтоматами и другими элементами безопасности.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Примеры работ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img 
              src="https://i.ibb.co/qM9PcKn/socket-example.png" 
              alt="Установка розеток" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
            <img 
              src="https://i.ibb.co/kxKgFj3/lights-installation.png" 
              alt="Монтаж светильников" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
            <img 
              src="https://i.ibb.co/bdRqm92/panel-connection.png" 
              alt="Подключение электрощита" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Вызов электрика в Колпино</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Нужно установить электрооборудование? Звоните! Оперативный выезд, качественное выполнение работ, доступные цены.
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

export default ElectricalInstallation;
