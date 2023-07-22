import React from 'react';
import ApexChart from '../../ApexChart/ApexChart';
import './MiddleSide.css';
import RadialBar from '../../ApexChart/RadialBar';

const MiddleSide = ({ windowWidth }) => {
  return (
    <>
      <div className="income">
        <div className="income-detail">
          <h4>Retirement Income</h4>
          <h3>Starting Year 2056</h3>

          <div className="income-wrap">
            <div className="wrap">
              <h1>$300,000</h1>
              <span>My Goal</span>
              <div className="line"></div>
            </div>
            <div className="mobile-size">
              <div className="wrap">
                <h4>59%</h4>
                <span>Goal Achieved</span>
                <div className="line"></div>
              </div>
              <div className="wrap">
                <h4>$300</h4>
                <span>Est. Monthly Income</span>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <h3>Contribution Overtime</h3>
        <ApexChart />
        <div className="compare">
          <h3>How do I compre to my peers?</h3>
          <span className="compare-span">
            These numbers represent current goal achievement.
          </span>

          <div className="goals">
            <div className="left-goal">
              <span>
                <b>Age:</b> Under 30 <i class="bx bxs-down-arrow"></i>
              </span>
              <span>
                <b>Salary:</b> K20 - k30 <i class="bx bxs-down-arrow"></i>
              </span>
              <span>
                <b>Gender:</b> Male <i class="bx bxs-down-arrow"></i>
              </span>
            </div>
            <div className="bars">
              <RadialBar windowWidth={windowWidth} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSide;
