import '../style/ProjectItem.sass'

const Project = props => (
      <li className="Project">
        <a href={props.project.id}>
          <h3 className={props.color}>{props.project.name}</h3>
        </a>
      </li>
    )

export default Project
