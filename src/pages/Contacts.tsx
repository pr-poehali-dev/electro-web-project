import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Phone, MessageCircle } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-xl max-w-3xl">
              Свяжитесь со мной для консультации или заказа услуг электрика в Колпино
            </p>
          </div>
        </section>
        
        {/* Contact info */}
        <section className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-primary text-white">
                <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                <p className="mb-8">
                  Профессиональный электрик в Колпино и Колпинском районе Санкт-Петербурга. 
                  Выполняю электромонтажные работы любой сложности.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Вызов электрика в Колпино</h3>
                    <a href="tel:89500308830" className="text-xl font-bold flex items-center gap-2 hover:underline">
                      <Phone size={24} />
                      8 950 030 88 30
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Мессенджеры</h3>
                    <div className="flex flex-col gap-3">
                      <a 
                        href="https://wa.me/89500308830" 
                        className="flex items-center gap-2 hover:underline"
                      >
                        <MessageCircle size={24} />
                        WhatsApp
                      </a>
                      <a 
                        href="https://t.me/89500308830" 
                        className="flex items-center gap-2 hover:underline"
                      >
                        <MessageCircle size={24} />
                        Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Работаю в районах</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Колпино</li>
                  <li>• Колпинский район</li>
                  <li>• Металлострой</li>
                  <li>• Понтонный</li>
                  <li>• Саперный</li>
                  <li>• Усть-Ижора</li>
                  <li>• Петро-Славянка</li>
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-lg font-bold mb-4">Режим работы</h3>
                  <p className="text-gray-700">
                    Принимаю заявки ежедневно с 8:00 до 22:00
                  </p>
                  <p className="mt-4 text-gray-700">
                    Выезд на срочные работы - в течение 1-2 часов после звонка
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Вызвать электрика в Колпино</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас для получения профессиональной консультации и заказа услуг
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

export default Contacts;
