import "./Project.css"

function Project({project}) {
    
    return (
    <div className='project-container'>
        <img src={project.screenshot} alt={project.title}/>
        <div className='overlay'></div>
        <div className='content'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
        <a href={project.linkDeployment} className="button" target="_blank" rel="noreferrer">Go to Application</a>
        <a href={project.linkRepository} className="button" target="_blank" rel="noreferrer">Go to Repository</a>
    </div>
  )
}

export default Project