import React from 'react'
import experience from './Data/experience.json';

const Experience = () => {
  return (
    <>
      <div className="container exp" id="experience">
        <h1> EXPERIENCE</h1>
        {
          experience.map((data) => {
            return (
              <>
                <div key={data.id} className="ex-items text-center my-5" data-aos="zoom-in" data-aos-duration="1000">
                  <div className="left">
                    <img src={`/Images/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right">
                    <h2>{data.role}</h2>
                    <h4 style={{color: "yellowgreen"}}>
                      {data.startDate}{" "}{data.endDate}{" "}{data.location}
                    </h4>
                    {
                      data.experiences.map((exp) => {
                        return (
                          <h5 style={{color: "skyblue"}}>{exp}</h5>
                        )
                      })
                    }
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Experience