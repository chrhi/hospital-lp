import { banner1Image } from '@/Components/Shared/Consts';
import ListItem from './ListItem';
import { useTranslation } from 'react-i18next';

const Banner1 = () => {
  const { t } = useTranslation();
  const texts = t('services.banner.texts', { returnObjects: true }) as string[];

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 md:gap-10 mt-20">
      <div className="max-w-xs md:max-w-md">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl mb-5">
          {t('services.banner.heading')}
        </h3>
        <ul className="text-sm md:ms-5 gap-2 md:gap-5 flex flex-col">
          {texts.map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </ul>
      </div>
      <div className="bg-secondary/30 shadow-xl rounded-2xl p-5 pb-0 max-w-xs md:max-w-md border border-white/60">
        <img src={banner1Image} alt={t('services.bannerAlt')} />
      </div>
    </div>
  );
};

export default Banner1;
