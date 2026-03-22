import SectionWrapper from '@/Components/Main/SectionWrapper';
import { motion } from 'framer-motion';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import hospitalAbout from '@/assets/hospital-images/hopital-12.jpg';

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
        className="relative isolate min-h-[max(22rem,68vh)] w-full overflow-hidden shadow-xl sm:min-h-[max(26rem,72vh)] md:min-h-[max(30rem,76vh)] lg:min-h-[max(34rem,80vh)]"
      >
        <img
          src={hospitalAbout}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/60 to-ink/82"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[max(22rem,68vh)] w-full max-w-[1250px] flex-col justify-center px-5 py-16 sm:min-h-[max(26rem,72vh)] sm:py-20 md:min-h-[max(30rem,76vh)] md:px-16 md:py-24 lg:min-h-[max(34rem,80vh)] lg:py-28">
          <div className="mb-10 text-center">
            <h3 className="mb-2 text-4xl font-bold text-white drop-shadow-md">
              {t('about.title')}
            </h3>
            <p className="text-sm text-white/90 md:text-base">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 shadow-lg backdrop-blur-md md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/35">
                <InformationCircleIcon className="h-6 w-6 text-white" />
              </span>
              <h4 className="text-lg font-bold text-white drop-shadow-sm">
                {t('about.presentationTitle')}
              </h4>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-white/95 drop-shadow-sm md:text-base">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutSection;
