import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Troubleshooting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="page-header">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4">Устранение неисправностей электрики в Колпино</h1>
            <p className="text-xl max-w-3xl">
              Оперативная диагностика и ремонт электрики в квартирах, домах и офисах в Колпино и Колпинском районе СПб
            </p>
          </div>
        </section>
        
        {/* Service description */}
        <section className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Ремонт и устранение неисправностей</h2>
              <p className="text-lg mb-6">
                Быстро определяю и устраняю любые проблемы с электрикой – от поиска обрыва до ремонта сложного оборудования с соблюдением всех норм безопасности.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Поиск и устранение обрывов и коротких замыканий</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Устранение искрения в розетках и выключателях</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Ремонт и замена неисправных элементов электросети</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Ремонт электрощитов и автоматов защиты</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                  <span>Диагностика и устранение причин перебоев в электроснабжении</span>
                </li>
              </ul>
              <a 
                href="tel:89500308830" 
                className="bg-primary text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Вызвать электрика
              </a>
            </div>
            <div>
              <img 
                src="https://i.ibb.co/XDV0qZw/troubleshooting.png" 
                alt="Устранение неисправностей электрики в Колпино" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Common Problems */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Распространенные неисправности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/MG53VYK/short-circuit.png" 
                  alt="Короткое замыкание" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Короткое замыкание</h3>
                <p className="text-gray-600">
                  Определение места короткого замыкания, замена поврежденного участка проводки и защита от повторных замыканий.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/xjwm5kj/faulty-socket.png" 
                  alt="Неисправности розеток" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Неисправные розетки</h3>
                <p className="text-gray-600">
                  Устранение искрения, нагрева и других неисправностей розеток и выключателей. Замена внутренних механизмов.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://i.ibb.co/jkJdNP3/power-outage.png" 
                  alt="Отключение электричества" 
                  className="rounded-lg w-full h-48 object-cover mb-4" 
                />
                <h3 className="text-xl font-bold mb-2">Отключение электричества</h3>
                <p className="text-gray-600">
                  Быстрое определение причин отключения электроэнергии, проверка и восстановление работы автоматов защиты и УЗО.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Steps */}
        <section className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Как я работаю</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Принимаю заявку</h3>
              <p className="text-gray-600">Оперативно отвечаю на звонок и уточняю детали проблемы</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Выезжаю на объект</h3>
              <p className="text-gray-600">Быстро прибываю на место для диагностики неисправности</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Провожу диагностику</h3>
              <p className="text-gray-600">Определяю точную причину неисправности специальными приборами</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Устраняю проблему</h3>
              <p className="text-gray-600">Быстро и качественно ремонтирую неисправность с гарантией</p>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Примеры работ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img 
              src="https://i.ibb.co/RQSxZwZ/repair-example1.png" 
              alt="Ремонт электропроводки" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
            <img 
              src="https://i.ibb.co/bdRqm92/panel-connection.png" 
              alt="Ремонт электрощита" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
            <img 
              src="https://i.ibb.co/xjwm5kj/faulty-socket.png" 
              alt="Замена неисправной розетки" 
              className="rounded-lg shadow-md w-full h-64 object-cover" 
            />
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-primary text-white py-16 mt-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Срочный вызов электрика в Колпино</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Возникли проблемы с электрикой? Звоните сейчас! Оперативно приеду и устраню любую неисправность.
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

export default Troubleshooting;
