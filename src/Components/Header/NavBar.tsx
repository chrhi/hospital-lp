import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { SelectedPage } from '@/Components/Shared/Types';
import { useEffect, useState } from 'react';

import useMediaQuery from '@/Hooks/useMediaQuery';

import Links from './Links';
import Button from '../UI/Button';
import { navLinks } from '@/Components/Shared/Consts';
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isMenuToggled) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuToggled]);

  const closeMenu = () => setIsMenuToggled(false);

  return (
    <nav className="shrink-0">
      {isAboveMediumScreens && (
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 flex-wrap justify-end">
            <Links
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <Button
            href={`#${SelectedPage.Contact}`}
            onClick={() => setSelectedPage(SelectedPage.Contact)}
          >
            Prendre rendez-vous
          </Button>
        </div>
      )}
      {!isAboveMediumScreens && (
        <button onClick={() => setIsMenuToggled((prev) => !prev)}>
          <Bars3Icon className="h-8 w-8" />
        </button>
      )}
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 z-50 h-[100dvh] w-[min(90vw,360px)] bg-white/95 backdrop-blur-xl drop-shadow-2xl border-l border-white/60 flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink/5">
              <div className="min-w-0">
                <div className="text-sm font-extrabold tracking-wide text-ink truncate">
                  Menu
                </div>
                <div className="text-xs opacity-70 truncate">
                  Clinique AALEM ESSIHA
                </div>
              </div>
              <button
                aria-label="Fermer le menu"
                onClick={closeMenu}
                className="p-2 rounded-xl hover:bg-ink/5 transition"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>

            <div className="flex-1 overflow-auto px-4 py-4">
              <nav className="space-y-2">
                {navLinks.map((link) => {
                  const active = selectedPage === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={() => {
                        setSelectedPage(link.id);
                        closeMenu();
                      }}
                      className={`w-full flex items-center justify-between rounded-2xl px-4 py-3 font-bold text-lg transition ${
                        active
                          ? 'bg-primary/10 text-primary'
                          : 'text-ink hover:bg-ink/5'
                      }`}
                    >
                      <span className="truncate">{link.label}</span>
                      <span
                        className={`h-2 w-2 rounded-full ${
                          active ? 'bg-primary' : 'bg-transparent'
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 border-t border-ink/5">
              <Button
                href={`#${SelectedPage.Contact}`}
                onClick={() => {
                  setSelectedPage(SelectedPage.Contact);
                  closeMenu();
                }}
                className="w-full text-base"
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavBar;
