import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './menu.css';

export type MenuType = {
  key: string;
  label: string;
};

export enum MenuTheme {
  default = '',
  vertical = 'vertical',
  horizontal = 'horizontal'
}

export interface MenuProps {
  menuList: MenuType[];
  menuFooter?: string;
  type?: string;
  className?: string;
}

const Menu: React.FC<MenuProps> = memo(
  ({
    menuList,
    menuFooter,
    type,
    className
  }) => {
    const renderMenuHeader = (list: MenuType[]) => {
      return list.map((item) => (
        <li className={`${className} menu-item-${type}`} key={item.key}>
          <Link to='#'>{item.label}</Link>
        </li>
      ));
    };

    return (
      <div data-testid='menu' className='menu'>
        <ul className={`${className} menu-list-${type}`}>
          {menuFooter && (
            <p className={`menu-main-${type}`}>{menuFooter}</p>
          )}
          {renderMenuHeader(menuList)}
        </ul>
      </div>
    );
  }
);

export default Menu;
