import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Zap size={28} className="text-primary" />
            <span className="text-xl font-bold">Электрик Колпино</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link to="/services/electrical-wiring" className="block p-3 hover:bg-slate-100 rounded-md">
                      Электропроводка
                    </Link>
                    <Link to="/services/electrical-installation" className="block p-3 hover:bg-slate-100 rounded-md">
                      Монтаж электрооборудования
                    </Link>
                    <Link to="/services/troubleshooting" className="block p-3 hover:bg-slate-100 rounded-md">
                      Устранение неисправностей
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contacts" className="inline-flex items-center justify-center rounded-md h-10 px-4 py-2 text-sm font-medium">
                  Контакты
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/links" className="inline-flex items-center justify-center rounded-md h-10 px-4 py-2 text-sm font-medium">
                  Мои сайты
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="hidden md:block">
            <a href="tel:89500308830" className="text-lg font-semibold text-primary">
              8 950 030 88 30
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
