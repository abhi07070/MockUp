import React, { useEffect, useState } from 'react';
import './SideNavbar.css';
import { NavData } from './NavData';
import { BottomData } from './NavData';
import LeftSide from '../Slides/LeftSide/LeftSide';
import RightSide from '../Slides/RightSide/RightSide';
import MiddleSide from '../Slides/MiddleSide/MiddleSide';

const SideNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event listener for window resize to update the windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section className="home grid">
        {windowWidth < 1000 ? (
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
          <nav className="sidebar">
            <div className="menu-bar">
              <div className="menu">
                {windowWidth > 800 && (
                  <li className="search-box">
                    <i className="bx bx-search icon"></i>
                    <input type="text" placeholder="Search..." />
                  </li>
                )}
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
                      data.icon !== 'search' && (
                        <li className="list" key={key}>
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
        )}
        <LeftSide BottomData={BottomData} windowWidth={windowWidth} />{' '}
        {/* Comment: Render LeftSide component */}
        <MiddleSide /> {/* Comment: Render MiddleSide component */}
        <RightSide /> {/* Comment: Render RightSide component */}
      </section>
    </>
  );
};

export default SideNavbar;
