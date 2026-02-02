import Button from '@/Components/UI/Button';
import hero from '@/assets/Images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse  md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl"
        >
          <h1 className="lg:text-7xl text-4xl font-bold leading-tight">
            Votre santé est notre priorité
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            La Clinique AALEM ESSIHA vous accompagne avec un plateau technique
            complet et des spécialités médico-chirurgicales pour une prise en
            charge de qualité.
          </p>
          <div className="text-sm md:text-base opacity-90 max-w-xl mx-auto md:mx-0">
            <ul className="space-y-2">
              <li>• Prise en charge médico-chirurgicale pluridisciplinaire</li>
              <li>• Radiologie (Scanner, IRM) et laboratoire sur place</li>
              <li>• Bloc opératoire (6 salles) et capacité de 155 lits</li>
            </ul>
          </div>
          <Button href="#contact">Prendre rendez-vous</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          className="max-w-xs md:max-w-none"
        >
          <img src={hero} alt="hero" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <DescNums />
      </motion.div>
    </SectionWrapper>
  );
};

export default Home;
