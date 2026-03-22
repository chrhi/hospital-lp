import SectionWrapper from '../SectionWrapper';
import banner2 from '@/assets/Images/banner2.png';
import { motion } from 'framer-motion';
import {
  BeakerIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CircleStackIcon,
  CpuChipIcon,
} from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const plateauCardOrder = [
  { key: 'radiologie', Icon: BuildingOffice2Icon, delay: 0 },
  { key: 'laboratoire', Icon: BeakerIcon, delay: 0.05 },
  { key: 'scannerIrm', Icon: CircleStackIcon, delay: 0.08 },
  { key: 'bloc', Icon: BuildingStorefrontIcon, delay: 0.1 },
  { key: 'capacite', Icon: CpuChipIcon, delay: 0.12 },
] as const;

const Doctors = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="plateautechnique">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center"
      >
        <h3 className="text-4xl font-bold mb-2">{t('plateau.title')}</h3>
        <p className="opacity-80 mb-3 max-w-3xl mx-auto">
          {t('plateau.intro1')}
        </p>
        <p className="opacity-80 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          {t('plateau.intro2')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plateauCardOrder.map(({ key, Icon, delay }) => {
          const items = t(`plateau.cards.${key}.items`, {
            returnObjects: true,
          }) as string[];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay }}
              className="bg-white/80 rounded-3xl border-2 border-ink/12 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-6 w-6 text-primary" />
                <h4 className="font-bold text-lg">
                  {t(`plateau.cards.${key}.title`)}
                </h4>
              </div>
              <ul className="space-y-2 text-sm md:text-base">
                {items.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mt-10 bg-secondary/30 rounded-2xl border-2 border-ink/12 p-5 pb-0 max-w-3xl mx-auto"
      >
        <img src={banner2} alt={t('plateau.bannerAlt')} />
      </motion.div>
    </SectionWrapper>
  );
};

export default Doctors;
