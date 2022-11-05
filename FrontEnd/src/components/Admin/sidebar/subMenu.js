import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
          <Link to={item.link}>
            <div className="sidebar__item-inner">
              {item.icon}{item.text}
              <div className="sidebar__item-dropdown" onClick={item.subNav && showSubnav}>
                {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
                </div>
            </div>
          </Link>
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <Link to={item.link} key={index}>
                  <div className="sidebar__dropdownitem">
                    {item.icon}{item.text}
                  </div>
                </Link>
              );
            })}
        </>
      );
}

export default SubMenu;