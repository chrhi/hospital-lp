import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

type Props = {
  link: { id: SelectedPage };
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ link, selectedPage, setSelectedPage }: Props) => {
  const { t } = useTranslation();
  const handleLinkClick = () => {
    setSelectedPage(link.id);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === link.id ? 'text-primary' : 'text-ink'
      } transition font-bold text-lg duration-500 hover:text-primary`}
      href={`#${link.id}`}
      onClick={handleLinkClick}
    >
      {t(`nav.${link.id}`)}
    </AnchorLink>
  );
};

export default Link;
