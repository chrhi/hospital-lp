import Button from '@/Components/UI/Button';
import heroBg from '@/assets/hospital-images/hopital-12.jpg';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="home">
      <div className="relative min-h-[min(70vh,520px)] overflow-hidden rounded-3xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/60 to-background/40 md:bg-gradient-to-r md:from-background/93 md:via-background/65 md:to-background/25"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center text-center md:items-start md:text-start px-6 py-12 md:px-12 md:py-14 lg:max-w-xl tracking-wider md:tracking-normal [text-shadow:0_1px_2px_rgb(255_255_255/0.85)]"
        >
          <h1 className="lg:text-7xl text-4xl font-bold leading-tight text-ink">
            {t('home.heroTitle')}
          </h1>
          <p className="text-lg md:text-base lg:text-xl my-10 text-ink">
            {t('home.heroLead')}
          </p>
          <div className="text-sm md:text-base text-ink/90 max-w-xl">
            <ul className="space-y-2">
              <li>• {t('home.bullet1')}</li>
              <li>• {t('home.bullet2')}</li>
              <li>• {t('home.bullet3')}</li>
            </ul>
          </div>
          <Button href="#contact">{t('common.bookAppointment')}</Button>
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
