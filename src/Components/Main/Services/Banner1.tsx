import hopital02 from '@/assets/hospital-images/hopital-02.jpg';
import hopital04 from '@/assets/hospital-images/hopital-04.jpg';
import hopital05 from '@/assets/hospital-images/hopital-05.jpg';
import hopital10 from '@/assets/hospital-images/hopital-10.jpg';
import hopital12 from '@/assets/hospital-images/hopital-12.jpg';
import ListItem from './ListItem';
import { useTranslation } from 'react-i18next';

const Banner1 = () => {
  const { t } = useTranslation();
  const texts = t('services.banner.texts', { returnObjects: true }) as string[];

  return (
    <div className="mt-20 grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-8">
      <div className="rounded-3xl border-2 border-ink/12 bg-white/80 p-5 md:p-6 lg:max-w-[540px]">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {t('services.banner.heading')}
        </h3>
        <ul className="text-sm md:ms-5 gap-2 md:gap-5 flex flex-col">
          {texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>

      <figure
        className="relative m-0 rounded-3xl border-2 border-ink/12 bg-secondary/25 p-3 md:p-4"
        aria-label={t('services.banner.galleryAriaLabel')}
      >
        <div className="grid grid-cols-3 auto-rows-[104px] gap-2 md:auto-rows-[132px] md:gap-3">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl border-2 border-ink/12 bg-white/70">
            <img
              src={hopital12}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-ink/12 bg-white/70">
            <img
              src={hopital02}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-ink/12 bg-white/70">
            <img
              src={hopital04}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 overflow-hidden rounded-2xl border-2 border-ink/12 bg-white/70">
            <img
              src={hopital05}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border-2 border-ink/12 bg-white/70">
            <img
              src={hopital10}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <figcaption className="pointer-events-none absolute bottom-5 start-5 rounded-full border-2 border-primary/35 bg-white/90 px-4 py-1 text-xs font-bold text-primary backdrop-blur-sm">
          {t('header.clinicName')}
        </figcaption>
      </figure>
    </div>
  );
};

export default Banner1;
