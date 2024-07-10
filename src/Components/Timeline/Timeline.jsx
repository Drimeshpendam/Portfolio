import React from 'react';
import './Timeline.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <h1 className="timeline-heading">My Career Journey</h1>

      <div className="timeline-container">
        <div className="timeline-content">
          <h3>Work Experince</h3>
          <h3>Associate Level - 2</h3>
          <p>August 2021 – November 2023</p>
          <p>Tata Consultancy Services Pvt. Ltd, Pune, MH</p>
        </div>

        <div className="timeline-content">
          <h3>Master of Computer Application (MCA)</h3>
          <p>August 2023 - Present</p>
          <p>Pimpri Chinchwad College Of Engineering - Pune, MH</p>
        </div>

        <div className="timeline-content">
          <h3>Bachelor of Commerce (Computer Application)</h3>
          <p>July 2018 – June 2021</p>
          <p>Govindram Seksaria College of Commerce - Wardha, MH</p>
        </div>

        <div className="timeline-content">
          <h3>High School Education - (Computer Science)</h3>
          <p>July 2017 – June 2018</p>
          <p>Janki Devi Bajaj College of Science - Wardha, MH</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
