import { FooterData, navLinks } from '../Shared/Consts';
import ContactDiv from './ContactDiv';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <div className="bg-secondary/30 mt-24 px-6 py-16 md:px-16 border-t border-white/40">
      <div className="max-w-[1250px] m-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img className="w-16" src={FooterData.logo} alt="Logo" />
              <div className="font-extrabold text-ink leading-tight">
                <div>CLINIQUE</div>
                <div>AALEM ESSIHA</div>
              </div>
            </div>
            <div className="mt-5 space-y-2 font-bold">
              {FooterData.addresses.map((address, index) => (
                <p className="opacity-90" key={index}>
                  {address}
                </p>
              ))}
              {FooterData.phone ? <p>{FooterData.phone}</p> : null}
              <p className="opacity-80 text-sm font-normal">
                Horaires : à préciser
              </p>
            </div>
          </div>

          <div>
            <p className="font-bold text-lg mb-3">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <AnchorLink
                    href={`#${l.id}`}
                    className="font-bold opacity-90 hover:opacity-100 hover:text-primary transition"
                  >
                    {l.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold text-lg mb-3">Spécialités (extraits)</p>
            <ul className="space-y-2">
              {FooterData.departments.map((department, index) => (
                <li className="opacity-90" key={index}>
                  {department}
                </li>
              ))}
            </ul>
            <p className="text-sm opacity-80 mt-3">
              Voir la section <span className="font-bold">Spécialités</span> pour
              la liste complète.
            </p>
          </div>

          <div>
            <ContactDiv />
            <p className="text-xs opacity-70 mt-4">
              Les informations (adresse, horaires, téléphone/email) seront mises
              à jour dès réception des détails officiels.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/40 text-sm opacity-80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Clinique AALEM ESSIHA</p>
          <p>Site web : à préciser</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
