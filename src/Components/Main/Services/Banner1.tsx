import hopital11 from '@/assets/hospital-images/hopital-11.jpg';
import ListItem from './ListItem';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Banner1 = () => {
  const { t } = useTranslation();
  const texts = t('services.banner.texts', { returnObjects: true }) as string[];

  const heroMinH =
    'min-h-[max(22rem,62vh)] sm:min-h-[max(26rem,66vh)] md:min-h-[max(28rem,70vh)] lg:min-h-[max(32rem,74vh)]';

  return (
    <div className="relative mt-20 w-screen max-w-none [margin-inline:calc(50%-50vw)] overflow-x-clip">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative isolate w-full overflow-hidden shadow-xl ${heroMinH}`}
      >
        <img
          src={hopital11}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/72 to-ink/58 md:bg-gradient-to-r md:from-ink/88 md:via-ink/62 md:to-ink/45"
          aria-hidden
        />

        <div
          className={`relative z-10 mx-auto flex w-full max-w-[1250px] flex-col justify-center px-5 py-16 sm:py-20 md:px-16 md:py-24 lg:py-28 ${heroMinH}`}
        >
          <div className="max-w-3xl">
            <h3 className="mb-6 text-2xl font-bold text-white drop-shadow-md sm:text-3xl md:text-4xl">
              {t('services.banner.heading')}
            </h3>
            <ul className="flex flex-col gap-3 md:gap-4 md:ms-1">
              {texts.map((text, index) => (
                <ListItem key={index} text={text} variant="onImage" />
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner1;
