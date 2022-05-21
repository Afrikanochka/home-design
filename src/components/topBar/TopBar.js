import React, { useState } from 'react';
import css from "./TopBar.module.css";

const TopBar = () => {
    const [menuHidden, setMenuHidden] = useState(true);

    return (
      <div className={menuHidden ? css["topbar"] : css["topbar__menu-active"]}>
      <div
        className={menuHidden ? css["topbar__hamburger"] : css["topbar__close"]}
        onClick={() => {
          setMenuHidden(!menuHidden);
        }}
      ></div>

      <div
        className={menuHidden ? css["topbar__logo"] : css["topbar__nav-items"]}
      >
        <div
          className={
            menuHidden
              ? css["topbar__nav-items-desktop"]
              : css["topbar__nav-items"]
          }
        >
          <div className={css["topbar__nav-item"]}>
           <a href="#main" className={css["topbar__nav-link"]}>головна</a>
           </div>
          <div className={css["topbar__nav-item"]}>
           <a href="#gallery" className={css["topbar__nav-link"]}>галерея</a> 
            </div>
          <div className={css["topbar__nav-item"]}>
           <a href="#about-us" className={css["topbar__nav-link"]}>про нас</a> 
            </div>
          <div className={css["topbar__nav-item"]}>
          <a href="#contacts" className={css["topbar__nav-link"]}>контакти</a> 
          </div>
        </div>
      </div>
    </div>
 
    );
}

export default TopBar;