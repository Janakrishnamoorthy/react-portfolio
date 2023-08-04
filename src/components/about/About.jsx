import React from 'react'


const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="images/port.jpg" alt="" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Janakrishnamoorthy and I'm a <span >Developer</span>
              </div>
              <p>
                {" "}
                &nbsp;&nbsp;&nbsp; MySelf <b>R.Janakrishnamoorthy</b> from Theni, I
                did my Schoolings at
                <b>Z.K.M.Hr.Sec.School</b> at my Native, Now I am Pursuing My
                BE-Computer Science Engineering @
                <b>Erode Sengunthar Engineering College (Autonomous)</b>, My Short
                term Goal is to placed in a Well Reputed Company and My long term Goal
                is to Reach a Respected Position in that Organization, My hobby is to
                Driving, Playing Shuttle, Hearing Songs. And My Aim is to Become a Web
                Developer.
              </p>
              <a href="images/ES19CS29-CV.pdf">Download CV</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About