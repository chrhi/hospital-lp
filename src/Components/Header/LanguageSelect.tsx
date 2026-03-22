import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
};

const LanguageSelect = ({ className = '' }: Props) => {
  const { i18n, t } = useTranslation();
  const value = i18n.language.startsWith('ar') ? 'ar' : 'fr';

  return (
    <select
      aria-label={t('common.language')}
      value={value}
      onChange={(e) => void i18n.changeLanguage(e.target.value)}
      className={`rounded-xl border border-ink/15 bg-white/80 px-3 py-2 text-sm font-bold text-ink shadow-sm outline-none transition hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
    >
      <option value="fr">Français</option>
      <option value="ar">العربية</option>
    </select>
  );
};

export default LanguageSelect;
