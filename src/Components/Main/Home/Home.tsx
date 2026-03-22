import Button from '@/Components/UI/Button';
import hero from '@/assets/Images/hero.png';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="home">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="tracking-wider md:tracking-normal max-w-xs lg:max-w-xl"
        >
          <h1 className="lg:text-7xl text-4xl font-bold leading-tight">
            {t('home.heroTitle')}
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10">
            {t('home.heroLead')}
          </p>
          <div className="text-sm md:text-base opacity-90 max-w-xl mx-auto md:mx-0">
            <ul className="space-y-2">
              <li>• {t('home.bullet1')}</li>
              <li>• {t('home.bullet2')}</li>
              <li>• {t('home.bullet3')}</li>
            </ul>
          </div>
          <Button href="#contact">{t('common.bookAppointment')}</Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          className="max-w-xs md:max-w-none"
        >
          <img src={hero} alt={t('home.heroAlt')} />
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
