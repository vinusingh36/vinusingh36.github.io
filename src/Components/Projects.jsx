import projects from "../Data/projects.json"


const Projects = () => {
    return (
        <>
            <div className="container projects my-3" id="projects">
                <h1>PROJECTS</h1>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        projects.map((data) => (
                            <>
                                <div key={data.id} className="my-4 col-sm-6 col-md-6 col-lg-4 mx-5 carditems">
                                    <div className="card bg-dark text-light p-2"
                                        data-aos="flip-right"
                                        data-aos-duration="1000"
                                    >
                                        <div className="img d-flex justify-content-center align-items-cneter p-3" >
                                            <img src={data.imageSrc} className="card-img-top" alt="img" style={{ width: "300px", height: "200px", border: "2px solid yellow", borderRadius: "10px" }} />
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">{data.description}</p>
                                            <a href={data.demo} target="_blank" className="btn btn-primary mx-4">Live</a>
                                            <a href={data.source} target="_blank" className="btn btn-warning">Github</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Projects;