import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';

/**
 * Swizzled to add the build.gnosischain.com site links under the section
 * links. On desktop those live in the shared header (src/components/SiteHeader);
 * on phones the shared header hides them and this sidebar is the only menu.
 * Plain anchor on purpose: "/" is outside this site's baseUrl, and
 * Docusaurus <Link> would prefix it with /docs/.
 */
const SITE_LINKS = [{label: 'Ecosystem', href: '/'}];

export default function NavbarMobilePrimaryMenu() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items;
  return (
    <ul className="menu__list">
      {items.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
      <li className="menu__list-item" role="separator" aria-hidden="true">
        <hr className="menu__separator" />
      </li>
      {SITE_LINKS.map((l) => (
        <li key={l.href} className="menu__list-item">
          <a className="menu__link" href={l.href}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
