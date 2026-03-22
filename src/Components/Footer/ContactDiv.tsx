import Button from '../UI/Button';
import { useTranslation } from 'react-i18next';

const ContactDiv = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-xs">
      <p className="ms-1 font-bold max-w-[250px]">{t('footer.contactTitle')}</p>
      <p className="ms-1 mt-2 text-sm opacity-80">
        {t('footer.contactBlurb')}
      </p>
      <div className="mt-4">
        <Button href="#contact" className="w-full">
          {t('footer.contactButton')}
        </Button>
      </div>
    </div>
  );
};

export default ContactDiv;
