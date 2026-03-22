import { FooterData, navLinks } from '../Shared/Consts';
import ContactDiv from './ContactDiv';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Trans, useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const departments = t('footer.departments', {
    returnObjects: true,
  }) as string[];
  const hoursLine = t('footer.hours').trim();
  const websitePendingLine = t('footer.websitePending').trim();

  return (
    <div className="bg-secondary/30 mt-24 px-6 py-16 md:px-16 border-t border-white/40">
      <div className="max-w-[1250px] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img className="w-16" src={FooterData.logo} alt={t('footer.logoAlt')} />
              <div className="font-extrabold text-ink leading-tight">
                <div>CLINIQUE</div>
                <div>AALEM ESSIHA</div>
              </div>
            </div>
            <div className="mt-5 space-y-2 font-bold">
              <p className="opacity-90">{t('footer.clinicLine')}</p>
              <p className="opacity-90">{t('footer.addressLine')}</p>
              {FooterData.phone ? <p>{FooterData.phone}</p> : null}
              {hoursLine ? (
                <p className="opacity-80 text-sm font-normal">{hoursLine}</p>
              ) : null}
            </div>
          </div>

          <div>
            <p className="font-bold text-lg mb-3">{t('footer.navigation')}</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <AnchorLink
                    href={`#${l.id}`}
                    className="font-bold opacity-90 hover:opacity-100 hover:text-primary transition"
                  >
                    {t(`nav.${l.id}`)}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-3">{t('footer.specialtiesTitle')}</p>
            <ul className="space-y-2">
              {departments.map((department, index) => (
                <li className="opacity-90" key={index}>
                  {department}
                </li>
              ))}
            </ul>
            <p className="text-sm opacity-80 mt-3">
              <Trans
                i18nKey="footer.specialtiesHint"
                components={{ bold: <span className="font-bold" /> }}
              />
            </p>
          </div>

          <div>
            <ContactDiv />
            <p className="text-xs opacity-70 mt-4">{t('footer.disclaimer')}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/40 text-sm opacity-80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          {websitePendingLine ? <p>{websitePendingLine}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Footer;
