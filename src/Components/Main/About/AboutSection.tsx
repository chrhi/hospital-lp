import SectionWrapper from '@/Components/Main/SectionWrapper';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="apropos">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-2">{t('about.title')}</h3>
          <p className="opacity-80 text-sm md:text-base">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="bg-white/80 rounded-3xl shadow-lg p-6 md:p-8 border border-white/60">
          <div className="flex items-center gap-3 mb-4">
            <InformationCircleIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">{t('about.presentationTitle')}</h4>
          </div>
          <div className="space-y-3 opacity-90 text-sm md:text-base">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;
