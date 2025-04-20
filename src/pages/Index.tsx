import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import { Zap, Phone, Award, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Профессиональный электрик в Колпино
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Выполняю электромонтажные работы любой сложности в Колпино и Колпинском районе Санкт-Петербурга
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:89500308830" 
                className="bg-white text-primary px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                8 950 030 88 30
              </a>
              <Link 
                to="/contacts" 
                className="bg-primary/10 text-white border border-white/30 px-6 py-3 rounded-md font-bold text-lg hover:bg-primary/20 transition-colors"
              >
                Связаться
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services section */}
        <section className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Услуги электрика</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Электропроводка" 
              description="Монтаж и замена электропроводки в квартирах, домах и офисах. Прокладка кабеля, установка распределительных коробок."
              imageSrc="https://i.ibb.co/sVkDgj4/electrical-wiring.png"
              link="/services/electrical-wiring"
            />
            <ServiceCard 
              title="Монтаж электрооборудования" 
              description="Установка розеток, выключателей, светильников, люстр, электрощитов и другого электрооборудования."
              imageSrc="https://i.ibb.co/yB3ZcXp/electrical-installation.png"
              link="/services/electrical-installation"
            />
            <ServiceCard 
              title="Устранение неисправностей" 
              description="Диагностика и устранение неисправностей в электросети. Ремонт электропроводки, замена вышедших из строя элементов."
              imageSrc="https://i.ibb.co/XDV0qZw/troubleshooting.png"
              link="/services/troubleshooting"
            />
          </div>
        </section>
        
        {/* Why choose us section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают меня</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Квалификация</h3>
                <p className="text-gray-600">Профессиональный опыт и соответствующая квалификация для проведения всех видов электромонтажных работ.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Гарантия</h3>
                <p className="text-gray-600">Предоставляю гарантию на все выполненные работы и установленное оборудование.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Оперативность</h3>
                <p className="text-gray-600">Быстрый выезд на объект и выполнение работ в согласованные сроки.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Work Examples */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Примеры работ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <img 
              src="https://i.ibb.co/4F1xkJq/electric-panel.png" 
              alt="Монтаж электрощита" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://i.ibb.co/0Q6S5WX/cable-installation.png" 
              alt="Прокладка кабеля" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://i.ibb.co/nsdppCB/socket-installation.png" 
              alt="Установка розеток" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://i.ibb.co/NpQQnZN/wiring-replacement.png" 
              alt="Замена проводки" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </section>
        
        {/* Call to action */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужен электрик в Колпино?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас и получите бесплатную консультацию по всем вопросам, связанным с электромонтажными работами
            </p>
            <a 
              href="tel:89500308830" 
              className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              8 950 030 88 30
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
