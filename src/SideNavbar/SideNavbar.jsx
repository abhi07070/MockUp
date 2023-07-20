import React from 'react';
import './SideNavbar.css';
import { NavData } from './NavData';
import { BottomData } from './NavData';
import LeftSide from '../Slides/LeftSide/LeftSide';
import RightSide from '../Slides/RightSide/RightSide';
import MiddleSide from '../Slides/MiddleSide/MiddleSide';

const SideNavbar = () => {
  const handleToggleSidebar = () => {
    const sidebar = document.querySelector('nav.sidebar');
    sidebar.classList.toggle('close');
  };

  const handleSearchButtonClick = () => {
    const sidebar = document.querySelector('nav.sidebar');
    sidebar.classList.remove('close');
  };

  return (
    <>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">{/* <img src="logo.png" alt="" /> */}</span>
            <div className="text logo-text">
              <span className="name">Mock-Up</span>
            </div>
          </div>
          <i
            className="bx bx-chevron-right toggle"
            onClick={handleToggleSidebar}
          ></i>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={handleSearchButtonClick}>
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              {NavData.map((data, key) => (
                <li className="nav-link" key={key}>
                  <a href="#">
                    <i className={`bx bx-${data.icon} icon`}></i>
                    <span className="text nav-text">{data.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottom-content">
            {BottomData.map((data, key) => (
              <li className="" key={key}>
                <a href="#">
                  <i className={`bx bx-${data.icon} icon`}></i>
                  <span className="text nav-text">{data.name}</span>
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav>
      <section class="home grid">
        {/* <LeftSide />
        <MiddleSide /> */}
        <RightSide />
      </section>
    </>
  );
};

export default SideNavbar;
