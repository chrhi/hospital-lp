import SectionWrapper from '@/Components/Main/SectionWrapper';
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const mapsOpenUrl =
    'https://www.google.com/maps/place/36%C2%B007%2726.8%22N+5%C2%B059%2714.5%22E/@36.1241074,5.9847889,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.1241074!4d5.9873638?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D';

  return (
    <SectionWrapper id="contact">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <h3 className="text-4xl font-bold mb-2">{t('contact.title')}</h3>
        <p className="opacity-80 max-w-3xl mx-auto">{t('contact.subtitle1')}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-white/80 rounded-3xl border-2 border-ink/12 p-6 md:p-8 space-y-4"
      >
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-4 py-4">
          <p className="text-sm opacity-80">{t('map.phoneLabel')}</p>
          <a
            href="tel:0556616729"
            className="mt-1 inline-flex items-center gap-2 text-lg font-bold text-primary hover:opacity-80 transition"
          >
            <PhoneIcon className="h-5 w-5" />
            0556616729
          </a>
        </div>

        <div className="rounded-2xl border border-white/60 bg-white/70 px-4 py-4">
          <p className="text-sm opacity-80">{t('map.addressLabel')}</p>
          <p className="mt-1 inline-flex items-start gap-2 text-base font-bold text-ink">
            <MapPinIcon className="h-5 w-5 mt-0.5 text-primary shrink-0" />
            <span>{t('map.addressValue')}</span>
          </p>
        </div>

        <a
          href={mapsOpenUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center border-2 border-[#0d7bc4] bg-primary transition hover:bg-[#158ace] px-7 py-3 min-h-12 rounded-xl text-white font-bold"
        >
          {t('map.openMaps')}
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export default ContactSection;
