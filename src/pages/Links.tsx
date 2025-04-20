import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ExternalLink } from "lucide-react";

const Links = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Мои сайты</h1>
            <p className="text-xl max-w-3xl">
              Другие ресурсы электрика в Колпино, где вы можете узнать больше о моих услугах
            </p>
          </div>
        </section>
        
        {/* Links */}
        <section className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Официальные сайты</h2>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <a 
                    href="http://elektrikkolpino.bos.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">elektrikkolpino.bos.ru</h3>
                      <p className="text-gray-600">
                        Основной сайт с полным перечнем услуг электрика в Колпино
                      </p>
                    </div>
                    <ExternalLink size={24} className="text-gray-400 flex-shrink-0" />
                  </a>
                </div>
                
                <div className="p-6 border rounded-lg hover:shadow-md transition-shadow">
                  <a 
                    href="https://elektrik-kolpino.narod.ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">elektrik-kolpino.narod.ru</h3>
                      <p className="text-gray-600">
                        Дополнительный ресурс с примерами работ и подробным описанием услуг электрика
                      </p>
                    </div>
                    <ExternalLink size={24} className="text-gray-400 flex-shrink-0" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <p className="text-gray-600 text-center">
                  Посетите мои сайты для более подробной информации об услугах электрика в Колпино
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Вызов электрика в Колпино</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Звоните для получения профессиональной консультации и заказа услуг электрика
            </p>
            <a 
              href="tel:89500308830" 
              className="bg-white text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              8 950 030 88 30
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Links;
