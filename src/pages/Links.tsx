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
            <h1 className="text-4xl font-bold mb-4">Ссылки на мои сайты</h1>
            <p className="text-xl max-w-3xl">
              Другие сайты электрика в Колпино с дополнительной информацией об услугах
            </p>
          </div>
        </section>
        
        {/* Links section */}
        <section className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Электрик в Колпино</h2>
                  <p className="text-gray-600 mb-4">
                    Основной сайт с подробным описанием услуг электрика в Колпино и ценами на электромонтажные работы.
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/r2jzc4g/website-icon.png" 
                  alt="Веб-сайт" 
                  className="w-16 h-16"
                />
              </div>
              <a 
                href="http://elektrikkolpino.bos.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={18} />
                Перейти на сайт
              </a>
              <p className="text-sm text-gray-500 mt-3">
                URL: <span className="text-primary">http://elektrikkolpino.bos.ru</span>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Электрик Колпино</h2>
                  <p className="text-gray-600 mb-4">
                    Дополнительный информационный ресурс с примерами выполненных электромонтажных работ в Колпино.
                  </p>
                </div>
                <img 
                  src="https://i.ibb.co/r2jzc4g/website-icon.png" 
                  alt="Веб-сайт" 
                  className="w-16 h-16"
                />
              </div>
              <a 
                href="https://elektrik-kolpino.narod.ru" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={18} />
                Перейти на сайт
              </a>
              <p className="text-sm text-gray-500 mt-3">
                URL: <span className="text-primary">https://elektrik-kolpino.narod.ru</span>
              </p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto mt-8">
            <h3 className="text-xl font-bold mb-3">Почему у меня несколько сайтов?</h3>
            <p className="text-gray-600">
              Наличие нескольких сайтов позволяет мне разместить больше информации об услугах электрика в Колпино, показать различные примеры работ и предоставить максимально полную информацию для потенциальных клиентов. Каждый сайт имеет свою специфику и дополняет общую информацию об услугах.
            </p>
          </div>
        </section>
        
        {/* SEO section (hidden visually but good for search engines) */}
        <section className="container-custom py-8 text-gray-300 text-sm">
          <div className="max-w-4xl mx-auto">
            <p>
              Ключевые слова: электрик колпино, вызов электрика в колпино, электрик на дом колпино, электрик колпино 8 950 030 88 30, вызов электрика 89500308830 колпинский район спб
            </p>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужен электрик в Колпино?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Звоните прямо сейчас! Быстрый выезд, консультация и решение любых проблем с электрикой.
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
