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
          </div>
          <h6>Retirement Age</h6>
          <div className="slider">
            <SliderRange value={retirementAge} setValue={setRetirementAge} />
            <span>{retirementAge}</span>
          </div>

          <div className="line"></div>

          <div className="contribution">
            <h6>Employer Contribution</h6>
            <span>8.4%</span>
          </div>
          <div className="contribution">
            <h6>Interest Rate</h6>
            <span>5%</span>
          </div>
          <button>Update</button>
          <a href="">
            View Help Docs
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>

        <div className="consider">
          <h3>
            Are you considering a <b>Housing Advance?</b>
          </h3>
          <span>Limited time reduced interest.</span>
          <a href="">
            Learn More
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default RightSide;
