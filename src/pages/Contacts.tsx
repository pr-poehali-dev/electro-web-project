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
            <h1 className="text-4xl font-bold mb-4">Контакты электрика в Колпино</h1>
            <p className="text-xl max-w-3xl">
              Свяжитесь со мной для заказа электромонтажных работ в Колпино и Колпинском районе Санкт-Петербурга
            </p>
          </div>
        </section>
        
        {/* Contact details */}
        <section className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
              <p className="text-lg mb-6">
                Выполняю весь спектр электромонтажных работ в Колпино и Колпинском районе. Для заказа услуг или консультации свяжитесь со мной любым удобным способом:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <Phone size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Телефон</h3>
                    <a href="tel:89500308830" className="text-lg hover:text-primary transition-colors">
                      8 950 030 88 30
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="https://i.ibb.co/9YX3NW3/whatsapp-icon.png" alt="WhatsApp" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">WhatsApp</h3>
                    <a href="https://wa.me/89500308830" className="text-lg hover:text-primary transition-colors">
                      8 950 030 88 30
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <img src="https://i.ibb.co/cJLkMJR/telegram-icon.png" alt="Telegram" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Telegram</h3>
                    <a href="https://t.me/89500308830" className="text-lg hover:text-primary transition-colors">
                      8 950 030 88 30
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://i.ibb.co/s2g2JRd/contact-electrician.png" 
                alt="Электрик в Колпино" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Service area */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Зона обслуживания</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold mb-4">Колпино и Колпинский район</h3>
                <p className="text-gray-600 mb-4">
                  Оказываю услуги электрика в Колпино и на всей территории Колпинского района Санкт-Петербурга.
                </p>
                <img 
                  src="https://i.ibb.co/tJkzrjV/kolpino-map.png" 
                  alt="Карта Колпино" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              <p className="text-lg">
                Быстрый выезд на объект в пределах Колпинского района обычно занимает не более 30-60 минут в зависимости от удаленности и загруженности дорог.
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужен электрик в Колпино?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас! Консультация бесплатно. Быстрый выезд, качественное выполнение работ.
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
