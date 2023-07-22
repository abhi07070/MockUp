import React, { useState } from 'react';
import './RightSide.css';
import SliderRange from '../../ChakraUi/SliderRange';
const RightSide = () => {
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);
  return (
    <>
      <div className="strategy">
        <div className="sliders">
          <h3>Retirement Strategy</h3>
          <h6>Employee Contribution</h6>
          <div className="slider">
            <SliderRange
              value={employeeContribution}
              setValue={setEmployeeContribution}
            />
            <span>{employeeContribution}%</span>
          </div>{' '}
          {/* Comment: This is a slider to adjust 'Employee Contribution' percentage */}
          <h6>Retirement Age</h6>
          <div className="slider">
            <SliderRange value={retirementAge} setValue={setRetirementAge} />
            <span>{retirementAge}</span>
          </div>{' '}
          {/* Comment: This is a slider to adjust 'Retirement Age' */}
          <div className="line"></div>{' '}
          {/* Comment: This is a horizontal line */}
          <div className="contribution">
            <h6>Employer Contribution</h6>
            <span>8.4%</span>
          </div>{' '}
          {/* Comment: This displays 'Employer Contribution' */}
          <div className="contribution">
            <h6>Interest Rate</h6>
            <span>5%</span>
          </div>{' '}
          {/* Comment: This displays 'Interest Rate' */}
          <button>Update</button>{' '}
          {/* Comment: This is a button for updating the settings */}
          <a href="">
            View Help Docs
            <i class="bx bx-chevron-right"></i>
          </a>{' '}
          {/* Comment: This is a link to view help documents */}
        </div>

        <div className="consider">
          <h3>
            Are you considering a <b>Housing Advance?</b>
          </h3>{' '}
          {/* Comment: This section asks the user if they are considering a 'Housing Advance' */}
          <span>Limited time reduced interest.</span>
          <a href="">
            Learn More
            <i class="bx bx-chevron-right"></i>
          </a>{' '}
          {/* Comment: This is a link to learn more about the 'Housing Advance' */}
        </div>
      </div>
    </>
  );
};

export default RightSide;
