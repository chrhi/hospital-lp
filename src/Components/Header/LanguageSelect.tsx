import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
  /** Match primary CTA button height and padding in the desktop header */
  size?: 'default' | 'toolbar';
};

const LanguageSelect = ({ className = '', size = 'default' }: Props) => {
  const { i18n, t } = useTranslation();
  const value = i18n.language.startsWith('ar') ? 'ar' : 'fr';

  const sizeClass =
    size === 'toolbar'
      ? 'min-h-12 h-12 py-3 ps-7 pe-11 text-base'
      : 'py-2 ps-3 pe-10 text-sm';

  const chevronClass =
    size === 'toolbar' ? 'h-4 w-4 end-3.5' : 'h-3.5 w-3.5 end-2.5';

  return (
    <div
      className={`relative inline-flex min-w-0 max-w-full items-stretch ${className}`}
    >
      <select
        aria-label={t('common.language')}
        value={value}
        onChange={(e) => void i18n.changeLanguage(e.target.value)}
        className={`box-border w-full min-w-0 cursor-pointer appearance-none rounded-xl border-2 border-ink/15 bg-white/80 font-bold text-ink outline-none transition hover:border-primary/50 focus:border-primary focus-visible:border-primary ${sizeClass} ${className}`}
      >
        <option value="fr">Français</option>
        <option value="ar">العربية</option>
      </select>
      <ChevronDownIcon
        aria-hidden
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-ink ${chevronClass}`}
      />
    </div>
  );
};

export default LanguageSelect;
