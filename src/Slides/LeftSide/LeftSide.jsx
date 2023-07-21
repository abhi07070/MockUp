import React from 'react';
import user from './user.jpeg';
import './LeftSide.css';

const LeftSide = ({ BottomData, windowWidth }) => {
  return (
    <>
      <div className="profile">
        <div className="profile-detail">
          <div>
            <img src={user} alt="" />
          </div>
          <div className="profile-name">
            <h2>Hi Mike</h2>
            <span>Welcome back,</span>
          </div>
        </div>

        <div className="balance-info">
          <h4>Today</h4>
          <div className="b-info-first">
            <h1>$19,893</h1>
            <span>Account Balance</span>
          </div>
          <div className="b-info-first">
            <h4>$4,000</h4>
            <span>Year-to-date</span>
          </div>
          <div className="b-info-first">
            <h4>$1,892</h4>
            <span>Total Interest</span>
          </div>
          <div className="btn">
            <button>
              I want to <i class="bx bxs-down-arrow"></i>
            </button>
          </div>
        </div>

        <div className="transactions">
          <h4>Recent Transactions</h4>

          <div className="transaction">
            <span>2020-08-07</span>
            <h6>Withdrawal Transfer to Bank-XXX11</h6>
          </div>
          <div className="transaction">
            <span>2020-07-21</span>
            <h6>Withdrawal Transfer to Bank-XXX11</h6>
          </div>
          <div className="transaction">
            <span>2020-07-16</span>
            <h6>Withdrawal Transfer to Bank-XXX11</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSide;

{
  /* {windowWidth < 800 && hasBellIcon && (
          <li className="nav-link">
            <a href="#">
              <i className="bx bx-bell icon"></i>
            </a>
          </li>
        )} */
}
