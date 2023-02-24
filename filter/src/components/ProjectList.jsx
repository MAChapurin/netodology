import '../App.css'

export default function ProjectList(props) {
    const projects = props.projects;
    return (
        <div className='projects-wrap'>
            {projects.map((elem)=> {
                return (
                    <img className='product-img' src={elem.img} alt={elem.category} key={Math.random(1,1000)}/>
                )
            })}
        </div>
    )
}