import React, { useEffect, useState } from 'react';
import './SideNavbar.css';
import { NavData } from './NavData';
import { BottomData } from './NavData';
import LeftSide from '../Slides/LeftSide/LeftSide';
import RightSide from '../Slides/RightSide/RightSide';
import MiddleSide from '../Slides/MiddleSide/MiddleSide';

const SideNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchButtonClick = () => {
    setShowSearch(false);
  };

  return (
    <>
      {windowWidth < 800 ? (
        <nav className="sidebar">
          <div className="menu-bar">
            <div className="menu">
              <ul className="menu-links">
                {NavData.map((data, key) => (
                  <li className="nav-link" key={key}>
                    <a href="#">
                      <i className={`bx bx-${data.icon} icon`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottom-content">
              <ul className="menu-links">
                {BottomData.map(
                  (data, key) =>
                    data.icon !== 'bell' && (
                      <li className="" key={key}>
                        <a href="#">
                          <i className={`bx bx-${data.icon} icon`}></i>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className={`sidebar ${showSearch ? 'close' : ''}`}>
          <header>
            <i
              className="bx bx-chevron-right toggle ham"
              onClick={handleToggleSidebar}
            ></i>
          </header>
          <div className="menu-bar">
            <div className="menu">
              {windowWidth > 800 && (
                <li className="search-box" onClick={handleSearchButtonClick}>
                  <i className="bx bx-search icon"></i>
                  <input type="text" placeholder="Search..." />
                </li>
              )}
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
              <ul className="menu-links">
                {BottomData.map(
                  (data, key) =>
                    data.icon !== 'search' && (
                      <li className="" key={key}>
                        <a href="#">
                          <i className={`bx bx-${data.icon} icon`}></i>
                          <span className="text nav-text">{data.name}</span>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </nav>
      )}

      <section className="home grid">
        <LeftSide BottomData={BottomData} windowWidth={windowWidth} />
        <MiddleSide />
        <RightSide />
      </section>
    </>
  );
};

export default SideNavbar;
