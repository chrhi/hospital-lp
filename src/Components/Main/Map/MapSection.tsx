import SectionWrapper from '@/Components/Main/SectionWrapper';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MapSection = () => {
  const { t } = useTranslation();
  const mapsQuery = encodeURIComponent('CLINIQUE AALEM ESSIHA');
  const mapsEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
  const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  const accessItems = [
    t('map.access1'),
    t('map.access2'),
    t('map.access3'),
  ];

  return (
    <SectionWrapper id="localisation">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <h3 className="text-4xl font-bold mb-2">{t('map.title')}</h3>
        <p className="opacity-80 max-w-3xl mx-auto">{t('map.intro')}</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="bg-white/80 rounded-3xl shadow-lg p-6 text-start border border-white/60"
        >
          <div className="flex items-center gap-3 mb-4">
            <MapPinIcon className="h-6 w-6 text-primary" />
            <h4 className="font-bold text-lg">{t('map.addressBlockTitle')}</h4>
          </div>
          <div className="space-y-4">
            <div>
              <p className="opacity-90 font-bold">{t('map.addressLabel')}</p>
              <p className="opacity-90">{t('map.addressPending')}</p>
              <p className="opacity-80 text-sm mt-1">{t('map.addressNote')}</p>
            </div>

            <div>
              <p className="opacity-90 font-bold">{t('map.accessLabel')}</p>
              <ul className="list-disc ps-5 space-y-1 opacity-90 text-sm md:text-base">
                {accessItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="opacity-80 text-sm mt-2">{t('map.accessTip')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center bg-primary transition hover:bg-[#158ace] px-7 py-3 min-h-12 shadow-lg rounded-xl text-white font-bold w-full sm:w-auto"
                href={mapsOpenUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t('map.openMaps')}
              </a>
              <a
                className="inline-flex items-center justify-center bg-white/70 border border-white/60 transition hover:bg-white px-7 py-3 min-h-12 shadow-lg rounded-xl text-ink font-bold w-full sm:w-auto"
                href="#contact"
              >
                {t('map.requestDirections')}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
          className="bg-white/80 rounded-3xl shadow-lg overflow-hidden border border-white/60"
        >
          <div className="aspect-video w-full">
            <iframe
              title={t('map.iframeTitle')}
              src={mapsEmbedSrc}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-4 md:p-5 border-t border-white/60 bg-white/60">
            <p className="font-bold">{t('map.interactiveTitle')}</p>
            <p className="text-sm opacity-80 mt-1">
              {t('map.interactiveNote')}
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MapSection;
