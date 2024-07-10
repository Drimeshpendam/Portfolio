import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import github_icon from '../../assets/github.svg'; // Assuming you have a GitHub icon

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="work-item">
            <img src={work.w_img} alt={`Work ${index + 1}`} />
            <div className="project-details">
              <h3>{work.title}</h3>
              <div className="visit-link">
                <a
                  href={work.visit_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                  }}
                >
                  <span style={{ marginRight: '10px' }}>{work.w_name}</span>
                  <img
                    src={github_icon} // Use your GitHub icon path here
                    alt="GitHub Icon"
                    style={{ width: '30px', height: '30px', backgroundColor: 'white', borderRadius: '50%', padding: '2.5px' }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
