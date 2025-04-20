import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ElectricalWiring from "./pages/services/ElectricalWiring";
import ElectricalInstallation from "./pages/services/ElectricalInstallation";
import Contacts from "./pages/Contacts";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services/electrical-wiring" element={<ElectricalWiring />} />
        <Route path="/services/electrical-installation" element={<ElectricalInstallation />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/links" element={<Links />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
