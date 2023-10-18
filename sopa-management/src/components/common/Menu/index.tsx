import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './menu.css';

export type MenuType = {
  key: string;
  label: string;
}

export enum MenuTheme {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
}

export interface MenuProps {
  menuList: MenuType[];
  mainItem?: string;
  type?: string;
  className?: string;
}

const Menu: React.FC<MenuProps> = memo(({
  menuList,
  mainItem,
  type,
  className,
}) => {
  const renderMenuList = (list: MenuType[]) => {
    return list.map((item) => (
      <li className={`${className} menu-item-${type}`} key={item.key}>
        <a href='#'>{item.label}</a>
      </li>
    ));
  };

  return (
    <div data-testid='menu' className='menu'>
      <ul className={`${className} menu-list-${type}`}>
        {mainItem && (
          <li className={`${className} menu-main-${type}`}>
            <Link to='/'>{mainItem}</Link>
          </li>
        )}
        {renderMenuList(menuList)}
      </ul>
    </div>
  );
});

export default Menu;
