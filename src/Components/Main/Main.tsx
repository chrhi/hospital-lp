import Home from '@/Components/Main/Home/Home';
import AboutSection from './About/AboutSection';
import Services from './Services/Services';
import Doctors from './Doctors/Doctors';
import MapSection from './Map/MapSection';
import ContactSection from './Contact/ContactSection';

const Main = () => {
  return (
    <div>
      <Home />
      <div className="m-auto max-w-[1250px] px-5 md:px-16">
        <AboutSection />
        <Services />
        <Doctors />
        <MapSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Main;
