import React from 'react'
import projects from './Data/projects.json'

const Projects = () => {
  return (
    <>
      <div className="container projects my-5" id="projects">
        <h1> PROJECTS</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {projects.map((data) => (
            <>
              <div key={data.id} className="my-4 col-md-4 col-sm-6 col-lg-3 mx-4"  data-aos="flip-right" data-aos-duration="1500">
                <div className="card bg-dark text-light">
                  <div className="img d-flex justify-content-center align-item-center p-3">
                    <img src={`/Images/${data.imageSrc}`} className="card-img-top" alt="..." />
                  </div>  
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary mx-2" target="_blank">Demo</a>
                    <a href={data.source} className="btn btn-warning" target="_blank">Code</a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects