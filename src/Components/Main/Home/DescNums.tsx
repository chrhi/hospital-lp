import { useTranslation } from 'react-i18next';

type DescNumItem = { num: string; text: string };

const DescNums = () => {
  const { t } = useTranslation();
  const descNums = t('home.descNums', { returnObjects: true }) as DescNumItem[];

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5 px-6 text-center sm:px-10 md:flex-nowrap md:justify-around md:px-12 lg:px-16">
      {descNums.map((descNum, index) => (
        <div
          className="w-xl rounded-3xl border-2 border-ink/12 bg-white/80 p-6 md:px-4 lg:w-1/5"
          key={index}
        >
          <h3 className="lg:text-4xl text-2xl font-bold mb-2">{descNum.num}</h3>
          <p className="lg:text-base text-sm">{descNum.text}</p>
        </div>
      ))}
    </div>
  );
};

export default DescNums;
