import Button from '@/Components/UI/Button';
import hospital01 from '@/assets/hospital-images/hopital-01.jpg';
import hospital03 from '@/assets/hospital-images/hopital-03.jpg';
import hospital06 from '@/assets/hospital-images/hopital-06.jpg';
import hospital09 from '@/assets/hospital-images/hopital-09.jpg';
import hospital11 from '@/assets/hospital-images/hopital-11.jpg';
import DescNums from './DescNums';
import SectionWrapper from '../SectionWrapper';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="home">
      <div className="relative min-h-[72vh] w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 grid grid-cols-1 items-center gap-8 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-2 lg:gap-10 lg:px-12"
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-start tracking-wider md:tracking-normal">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              Clinique AALEM ESSIHA
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink lg:text-6xl">
              {t('home.heroTitle')}
            </h1>
            <p className="my-6 text-base text-ink lg:text-xl">{t('home.heroLead')}</p>
            <div className="text-sm text-ink/90 md:text-base">
              <ul className="space-y-2">
                <li>• {t('home.bullet1')}</li>
                <li>• {t('home.bullet2')}</li>
                <li>• {t('home.bullet3')}</li>
              </ul>
            </div>
            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact">{t('common.bookAppointment')}</Button>
              <a
                href="#localisation"
                className="inline-flex items-center justify-center rounded-xl border border-primary/30 bg-white/70 px-6 py-3 font-bold text-primary shadow-md transition hover:bg-white"
              >
                {t('nav.localisation')}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <div className="col-span-2 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-lg">
              <img
                src={hospital11}
                alt=""
                aria-hidden
                className="h-44 w-full object-cover transition duration-500 hover:scale-105 md:h-56"
              />
            </div>
            <div className="row-span-2 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-lg">
              <img
                src={hospital01}
                alt=""
                aria-hidden
                className="h-full min-h-[220px] w-full object-cover transition duration-500 hover:scale-105 md:min-h-[260px]"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-lg">
              <img
                src={hospital03}
                alt=""
                aria-hidden
                className="h-32 w-full object-cover transition duration-500 hover:scale-105 md:h-36"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-lg">
              <img
                src={hospital06}
                alt=""
                aria-hidden
                className="h-32 w-full object-cover transition duration-500 hover:scale-105 md:h-36"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-lg">
              <img
                src={hospital09}
                alt=""
                aria-hidden
                className="h-32 w-full object-cover transition duration-500 hover:scale-105 md:h-36"
              />
            </div>
          </div>
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
