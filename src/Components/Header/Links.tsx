import { SelectedPage } from '@/Components/Shared/Types';
import Link from './Link';
import { navLinks } from '@/Components/Shared/Consts';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div className="flex items-center gap-6 flex-wrap">
      {navLinks.map((link) => (
        <Link
          key={link.id}
          link={link}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  );
};

export default Links;
