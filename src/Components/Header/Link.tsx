import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  link: { label: string; id: SelectedPage };
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ link, selectedPage, setSelectedPage }: Props) => {
  const handleLinkClick = () => {
    setSelectedPage(link.id);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === link.id
          ? 'text-primary border-b-2 mt-0.5 border-primary/70'
          : 'text-ink'
      } transition font-bold text-lg duration-500 hover:text-primary`}
      href={`#${link.id}`}
      onClick={handleLinkClick}
    >
      {link.label}
    </AnchorLink>
  );
};

export default Link;
