import React from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import useBaseUrl from '@docusaurus/useBaseUrl';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import SiteHeader from '@site/src/components/SiteHeader/SiteHeader';
import styles from './styles.module.css';

/**
 * Two-row navbar.
 *  Row 1: the site header shared with the ecosystem app (build.gnosischain.com):
 *         mobile toggle, logo, search, site links, socials, colour-mode toggle.
 *  Row 2: section links (the "left" navbar items from docusaurus.config.js).
 * "Right" navbar items are not rendered; the shared header owns that space.
 */
function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items;
  const [leftItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  const logoSrc = useBaseUrl('/img/gnosis.svg');

  return (
    <div className={clsx('navbar__inner', styles.inner)}>
      <SiteHeader
        current="docs"
        logoSrc={logoSrc}
        mobileMenu={false}
        start={!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        center={
          !searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )
        }
        end={<NavbarColorModeToggle className={styles.colorModeToggle} />}
      />

      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
          styles.sections,
        )}>
        <NavbarItems items={leftItems} />
      </div>
    </div>
  );
}
