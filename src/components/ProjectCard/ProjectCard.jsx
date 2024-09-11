import './ProjectCard.css';

const ProjectCard = () => {
    return (
        <>
            <div className="card">
                <img src="https://via.placeholder.com/150" alt="Project" />
                <div className="card-body">
                    <h3>Project Title</h3>
                    <p>Project Description</p>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;