import Logo from '/logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`${flexBetween} gap-3 ${
        isTopOfPage ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm'
      } transition fixed top-0 z-30 w-full px-4 py-3 md:px-16`}
    >
      <AnchorLink
        href={`#${SelectedPage.Home}`}
        onClick={() => setSelectedPage(SelectedPage.Home)}
        className="flex items-center gap-3 min-w-0"
      >
        <img
          className="w-14 sm:w-20 lg:w-24 shrink-0"
          src={Logo}
          alt="Clinique AALEM ESSIHA"
        />
        <div className="hidden sm:block leading-tight min-w-0">
          <div className="font-extrabold tracking-wide text-ink truncate">
            CLINIQUE AALEM ESSIHA
          </div>
          <div className="text-xs opacity-80">Clinique privée</div>
        </div>
      </AnchorLink>
      <NavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </motion.div>
  );
};

export default Header;
