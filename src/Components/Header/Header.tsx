import Logo from '/logo.png';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { SelectedPage } from '@/Components/Shared/Types';
import { navLinks } from '@/Components/Shared/Consts';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

/** Viewport offset from top; aligns with section scroll-margin and fixed header */
const SCROLL_SPY_TOP_PX = 96;

const Header = () => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const flexBetween = 'flex items-center justify-between';

  useEffect(() => {
    const updateFromScroll = () => {
      setIsTopOfPage(window.scrollY < 48);

      let active: SelectedPage = SelectedPage.Home;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= SCROLL_SPY_TOP_PX) {
          active = id;
        }
      }
      setSelectedPage(active);
    };

    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={`${flexBetween} gap-3 ${
        isTopOfPage ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md border-b border-ink/10'
      } transition fixed top-0 z-30 w-full px-4 py-2 md:px-12 md:py-2.5`}
    >
      <AnchorLink
        href={`#${SelectedPage.Home}`}
        onClick={() => setSelectedPage(SelectedPage.Home)}
        className="flex items-center gap-3 min-w-0"
      >
        <img
          className="w-12 sm:w-16 lg:w-20 shrink-0"
          src={Logo}
          alt={t('header.logoAlt')}
        />
        <div className="hidden sm:block leading-tight min-w-0">
          <div className="font-extrabold tracking-wide text-sm lg:text-base text-ink truncate">
            {t('header.clinicName')}
          </div>
          <div className="text-[11px] opacity-80">{t('header.tagline')}</div>
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
