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
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import styles from './styles.module.css';

/**
 * Two-row navbar.
 *  Row 1: mobile toggle, logo, search, right-hand items, colour-mode toggle.
 *  Row 2: section links (the "left" navbar items from docusaurus.config.js).
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
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <div className={clsx('navbar__inner', styles.inner)}>
      <div className={styles.topRow}>
        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerLeft,
            'navbar__items',
            styles.brand,
          )}>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <span className={styles.wordmark}>Docs</span>
        </div>

        {!searchBarItem && (
          <div className={styles.search}>
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          </div>
        )}

        <div
          className={clsx(
            ThemeClassNames.layout.navbar.containerRight,
            'navbar__items navbar__items--right',
            styles.actions,
          )}>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </div>
      </div>

      <div className={clsx('navbar__items', styles.sections)}>
        <NavbarItems items={leftItems} />
      </div>
    </div>
  );
}
