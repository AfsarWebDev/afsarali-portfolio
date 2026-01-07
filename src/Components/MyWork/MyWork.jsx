import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Featured Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-card">
            <img src={work.w_img} alt="project" />
            <a href={work.live_link} target="_blank" rel="noopener noreferrer" className="project-btn">
              <span>View Live Project</span>
              <img src={arrow_icon} alt="arrow" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork